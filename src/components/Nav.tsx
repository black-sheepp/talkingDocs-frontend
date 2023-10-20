import Logo from "./bits_comp/Logo";
import { DropdownMenuDemo } from "./bits_comp/Menu";
import { ModeToggle } from "../components/mode-toggle";
import { SignIn } from "./bits_comp/SignIn";
import { SignUp } from "./bits_comp/SignUp";

const Nav = ({
	handleForm,
	handleSubmit,
	username,
	handlelogout,
	handleSignIn,
	fetchToken,
}: {
	handleForm: any;
	handleSubmit: any;
	username: any;
	handlelogout: any;
	handleSignIn: any;
	fetchToken: any;
}) => {
	return (
		<div className='w-full flex flex-wrap items-center justify-between mx-0 px-20 p-4 fixed top-0 left-0 right-0 z-10 bg-white dark:bg-[#020817]'>
			<a href='/' className='flex items-center'>
				<Logo />
				<span className='self-center text-2xl font-semibold'>&nbsp;&nbsp;TalkingDoc</span>
			</a>
			<div className='flex justify-center gap-4'>
				{fetchToken ? (
					<DropdownMenuDemo username={username} handlelogout={handlelogout} />
				) : (
					<>
						<SignIn handleForm={handleForm} handleSignIn={handleSignIn} />
						<SignUp handleForm={handleForm} handleSubmit={handleSubmit} />
					</>
				)}
				<ModeToggle />
			</div>
		</div>
	);
};

export default Nav;
