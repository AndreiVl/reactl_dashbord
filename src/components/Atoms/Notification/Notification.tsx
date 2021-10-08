import React from "react";
import './notification.scss';
import { Text } from '../Text/Text'

type NotificationProps = {
	number?: number,
	className?: string
}

export const Notification: React.FC<NotificationProps> = ({
	number = 1,
	className
}) => {
	return (
		<div className={`notification ${className || ''}`}>
			<Text
				fontWeight="text--bold"
				size="text--esm"
			>
				{number}
			</Text>
		</div>
	)
}