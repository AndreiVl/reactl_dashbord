import React from "react";
import './badge.scss';

import { Text } from '../Text/Text'

type BadgeProps = {
	text?: string,
	className?: string
}

export const Badge: React.FC<BadgeProps> = ({
	text = 'Badge',
	className = ''
}) => {
	return (
		<div className={`badge ${className || ''}`}>
			<Text
				fontWeight='text--bold'
				size='text--sm'
				color='text--white'
			>
				{text}
			</Text>
		</div>
	)
}