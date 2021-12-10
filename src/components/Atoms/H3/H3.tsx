import React from 'react';
import './h3.scss';

type H3Props = {
	className?: string,
	color?: color,
	children: React.ReactNode,
}

type color = 'h3--gray';

export const H3: React.FC<H3Props> = ({
	className = '',
	color,
	children,
}) => {
	return (
		<h3 className={`h3 ${className || ""} ${color || ''}`}>
			{children}
		</h3>
	)
}