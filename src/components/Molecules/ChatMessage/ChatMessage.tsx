import React from "react";
import './chat-message.scss';
import { TextSm } from '../../Atoms/Text/Text';
import { UerPik, UerPikProps } from '../../Atoms/UerPik/UerPik';
import { Message } from '../../Atoms/Message/Message'

type ChatMessageProps = {
	className?: string
	time?: string,
	message?: string,
	messageGreen?: boolean,
	user?: UerPikProps,
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
	time = '06:32',
	message = 'Lorem ipsum dolor sit amet, consectetur adipiscing, purus sit ametl.',
	messageGreen,
	user,
	className
}) => {
	return (
		<div className={`chat-message ${className || ""}`}>
			<div className="chat-message__img">
				<UerPik
					size={true}
					{...user}
				/>
			</div>

			<div className="chat-message__text">
				<Message
					text={message}
					className={`${messageGreen ? 'message--green' : ''}`}
				/>

				<div className="chat-message__date">
					<TextSm>
						{time} PM
					</TextSm>
				</div>
			</div>
		</div>
	)
}