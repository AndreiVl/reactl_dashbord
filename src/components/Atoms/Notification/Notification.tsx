import React from "react";
import './notification.scss';
import { TextEsm } from '../Text/Text'

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
			<TextEsm>
				{number}
			</TextEsm>
		</div>
	)
}