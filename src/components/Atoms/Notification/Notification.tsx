import React from "react";
import './notification.scss';
import { Text } from '../Text/Text'

type NotificationProps = {
	number?: number,
	red?: boolean,
	className?: string
}

export const Notification: React.FC<NotificationProps> = ({
	number = 1,
	red = false,
	className
}) => {
	return (
		<div className={`notification ${className || ''} ${red ? 'notification--red' : ''}`}>
			<Text
				fontWeight="text--bold"
				size="text--esm"
			>
				{number}
			</Text>
		</div>
	)
}