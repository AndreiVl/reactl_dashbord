import React from "react";
import './badge.scss';

import { Text } from '../Text/Text'

export type BadgeProps = {
	text?: string,
	color?: 'badge--green' | 'badge--red',
	size?: 'badge--big',
	visual?: 'badge--border' | 'badge--border-no',
	className?: string
}

export const Badge: React.FC<BadgeProps> = ({
	text = 'Badge',
	size,
	color,
	visual,
	className = ''
}) => {
	return (
		<div className={`badge ${className || ''}
		${size || ''}
		${color || ''}
		${visual || ''}
		`}>
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