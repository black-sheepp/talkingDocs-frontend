import "./App.css";
import ChatBot from "./components/ChatBot";
import DocUpload from "./components/DocUpload";
import Nav from "./components/Nav";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import PDFLoader from "./components/bits_comp/PDFLoader";
import TextLoader from "./components/bits_comp/TextLoader";

function App() {
	const [form, setForm] = useState({});
	const [logout, setLogout] = useState(true);

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			setForm(JSON.parse(user));
			setLogout(false);
		}
	}, []);

	const handleForm = (e: any) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const response = await fetch("http://localhost:8080/sign-up", {
			method: "POST",
			body: JSON.stringify(form),
			headers: { "Content-Type": "application/json" },
		});
		const data = await response.json();
		// console.log(data);
		setForm(data);
		setLogout(false);
		localStorage.setItem("user", JSON.stringify(data));
	};

	const handlelogout = async () => {
		await fetch("http://localhost:8080/logout", {
			method: "GET",
		});
		await localStorage.setItem("user", "");
		setLogout(true);
	};

	const handleSignIn = async (e: any) => {
		e.preventDefault();
		const response = await fetch("http://localhost:8080/sign-in", {
			method: "POST",
			body: JSON.stringify(form),
			headers: { "Content-Type": "application/json" },
		});
		const data = await response.json();
		// console.log(data);
		setForm(data);
		setLogout(false);
		localStorage.setItem("user", JSON.stringify(data));
	};

	function username(): string | null {
		function getNameValueFromJSON(jsonString: any): any | null {
			try {
				const data = JSON.parse(jsonString);
				if (data && typeof data.name === "string") {
					return data.name;
				} else {
					return null;
				}
			} catch (error) {
				return null;
			}
		}

		const jsonString = localStorage.getItem("user");
		const nameValue = getNameValueFromJSON(jsonString);
		return nameValue;
	}

	function fetchToken(): string | null {
		const jsonString = localStorage.getItem("user");
		function getNameValueFromJSON(jsonString: any): any | null {
			try {
				const data = JSON.parse(jsonString);
				if (data && typeof data.token === "string") {
					return data.token;
				} else {
					return null;
				}
			} catch (error) {
				return null;
			}
		}
		const tokenValue = getNameValueFromJSON(jsonString);
		return tokenValue;
	}

	const handlepdf = async (event: any) => {
		const file = event.target.files[0]; // Get the first selected file

		if (file) {
			const formData = new FormData();
			formData.append("pdf", file); // 'pdf' should match the server's expected field name for the file
			// Make a POST request to the server to upload the file
			await fetch("http://localhost:8080/pdf-upload", {
				method: "POST",
				body: formData,
				headers: { "content-type": "application/x-www-form-urlencoded" },
			});
		}
	};

	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<div className='h-screen pt-4'>
				<Nav
					handleForm={handleForm}
					handleSubmit={handleSubmit}
					username={username()}
					handlelogout={handlelogout}
					handleSignIn={handleSignIn}
					fetchToken={fetchToken()}
					logoutStatus={logout}
				/>
				<div className='flex flex-col justify-center px-8 lg:px-20'>
					{!logout ? (
						<DocUpload handlePdf={handlepdf} />
					) : (
						<>
							<p className='text-center text-2xl lg:text-2xl  mt-24'>
								Sign Up / Sign In with{" "}
								<strong className='text-[#01EBFC] text-5xl'>TalkingDocs</strong>.
							</p>
							<p className='text-center text-3xl lg:text-4xl font-semibold mt-24'>
								Step into the future of document interaction with{" "}
								<strong className='text-[#01EBFC]'>TalkingDocs</strong>.
							</p>
							<p className='text-center my-8 text-lg lg:text-xl font-light text-[#01EBFC]'>
								Experience the thrill as your documents come alive, engaging in a dynamic
								conversation. Reading is now a blast! 😎
							</p>
						</>
					)}
					{/* <ChatBot/> */}
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
