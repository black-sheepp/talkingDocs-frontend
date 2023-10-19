import Styles from "./ChatBot.module.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from 'lucide-react';


const ChatBot = () => {
	return (
		<div className={Styles.messagingApp}>
			<div className={Styles.messageWrapper}>
				<div className={Styles.blur} />
				<div id='messages' className={Styles.messages}>
					
					<div className={Styles.chat}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam facere deserunt
							possimus, iusto cum fuga aliquid, officia ad sunt voluptatum quod. Molestiae iste
							tenetur voluptate facilis quidem perferendis incidunt.
					</div>
					<div className={`${Styles.chat} ${Styles.me}`}>Hello, World!</div>
				</div>
			</div>
			<div className='flex w-full items-center space-x-2'>
				<Input type='email' placeholder='Ask TalkingDocs' />
				<Button type='submit'><Send/>&nbsp;&nbsp;Send</Button>
			</div>
		</div>
	);
};

export default ChatBot;
