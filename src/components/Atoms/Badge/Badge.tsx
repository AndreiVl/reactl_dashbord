import React from "react";
import './badge.scss';

import { TextSm } from '../Text/Text'

export type BadgeProps = {
	children?: React.ReactNode,
	color?: 'badge--green' | 'badge--red',
	size?: 'badge--big',
	visual?: 'badge--border' | 'badge--border-no',
	className?: string
}

export const Badge: React.FC<BadgeProps> = ({
	children,
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
			<TextSm>
				{children}
			</TextSm>
		</div>
	)
}