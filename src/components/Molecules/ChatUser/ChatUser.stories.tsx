import React from 'react';
import { ChatUser } from './ChatUser';

export default {
	title: 'Components/Molecules/ChatUser',
	component: ChatUser,
};


export const ChatUserDefault = () => (
	<ChatUser />
);
export const ChatUserNoActive = () => (
	<ChatUser
		title='Vlad'
		text='Lorem'
		userPikActive='user-pic--big-noactiv'
		notificationType={false}
	/>
);