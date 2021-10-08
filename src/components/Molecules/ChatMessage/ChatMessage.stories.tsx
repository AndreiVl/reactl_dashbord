import React from "react";
import { ChatMessage } from "./ChatMessage";

export default {
	title: 'Components/Molecules/ChatMessage',
	component: ChatMessage,
};

export const ChatMessageDefault = () => (
	<ChatMessage />
);
export const ChatMessageGreen = () => (
	<ChatMessage
		messageGreen
	/>
);