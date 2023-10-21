import Styles from "./ChatBot.module.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import TextLoader from "./bits_comp/TextLoader";

const ChatBot = () => {
	return (
		<div className={Styles.messagingApp}>
			<p className='text-center p-2 mt-0 text-3xl lg:text-3xl font-semibold fixed top-20 left-0 right-0 z-10 bg-white dark:bg-[#020817]'>
				Ask your <strong className='text-[#01EBFC]'>TalkingDocs</strong>.
			</p>
			<div className={Styles.messageWrapper}>
				<div className={Styles.blur} />
				<div id='messages' className={Styles.messages}>
					<div className={Styles.chat}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam facere deserunt
						possimus, iusto cum fuga aliquid, officia ad sunt voluptatum quod. Molestiae iste tenetur
						voluptate facilis quidem perferendis incidunt.
					</div>

					<div className={`${Styles.chat} ${Styles.me}`}>Hello, World!</div>
				</div>
				<TextLoader />
			</div>
			<div className='flex w-full items-center space-x-2'>
				<Input type='email' placeholder='Ask TalkingDocs' />
				<Button type='submit'>
					<Send />
					&nbsp;&nbsp;Send
				</Button>
			</div>
		</div>
	);
};

export default ChatBot;
