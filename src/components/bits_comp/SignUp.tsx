import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignUp() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>Sign Up</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[600px]'>
				<DialogHeader>
					<DialogTitle>Sign Up</DialogTitle>
					<DialogDescription>
						Sign Up  to TalkingDocs
					</DialogDescription>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='name' className='text-right'>
							Email
						</Label>
						<Input id='name' placeholder='shivamgupta@hivemind.com' className='col-span-3' />
					</div>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='name' className='text-right'>
							Name
						</Label>
						<Input id='name' placeholder='Shivam K Gupta' className='col-span-3' />
					</div>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='username' className='text-right'>
							Password
						</Label>
						<Input id='username' type="password" placeholder='*******' className='col-span-3' />
					</div>
				</div>
				<DialogFooter>
					<Button type='submit'>Submit</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
