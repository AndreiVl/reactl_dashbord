import React from 'react';
import { Message } from './Message';

export default {
	title: 'Components/Atoms/Message',
	component: Message,
};


export const MessageDefault = () => (
	<Message />
);
export const MessageGreen = () => (
	<Message className='message--green' />
);