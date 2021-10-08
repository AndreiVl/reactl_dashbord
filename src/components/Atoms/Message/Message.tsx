import React from "react";
import './message.scss';
import { Text } from '../Text/Text';

type MessageProps = {
	text?: string,
	className?: string
}

export const Message: React.FC<MessageProps> = ({
	text = 'Message',
	className
}) => {
	return (
		<div className={`message ${className || ""}`}>
			<Text >
				{text}
			</Text>
		</div>
	)
}