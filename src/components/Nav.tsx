import React from "react";
import Logo from "./bits_comp/Logo";
import { DropdownMenuDemo } from "./bits_comp/Menu";
import { ModeToggle } from "./bits_comp/ModeToggle";
import { SignIn } from "./bits_comp/SignIn";
import { SignUp } from "./bits_comp/SignUp";


const Nav = () => {
	return (
			<div className='w-full flex flex-wrap items-center justify-between mx-0 px-20 p-4 fixed top-0 left-0 right-0 z-10 bg-white dark:bg-[#020817]'>
				<a href='https://flowbite.com/' className='flex items-center'>
					<Logo/>
					<span className='self-center text-2xl font-semibold'>
                    &nbsp;&nbsp;TalkingDoc
					</span>
				</a>
				<div className="flex justify-center gap-4">
				<DropdownMenuDemo/>
				<SignIn/>
				<SignUp/>
				<ModeToggle/>
				</div>
			</div>
	);
};

export default Nav;
