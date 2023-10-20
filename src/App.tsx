import "./App.css";
import ChatBot from "./components/ChatBot";
import DocUpload from "./components/DocUpload";
import Nav from "./components/Nav";
import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";

function App() {
	const [form, setForm] = useState({});
	const [logout, setLogout] = useState(false);

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
		localStorage.setItem("user", JSON.stringify(data));
	}

	function username(): string | null {
		function getNameValueFromJSON(jsonString: string): string | null {
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
		function getNameValueFromJSON(jsonString: string): string | null {
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

		const jsonString = localStorage.getItem("user");
		const tokenValue = getNameValueFromJSON(jsonString);

		return tokenValue;
	}

	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<div className='h-screen'>
				<Nav
					handleForm={handleForm}
					handleSubmit={handleSubmit}
					username={username()}
					handlelogout={handlelogout}
					handleSignIn={handleSignIn}
					fetchToken={fetchToken()}
				/>
				<div className='flex flex-col justify-center px-40 mt-20'>
					<DocUpload />
					{/* <ChatBot/> */}
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
