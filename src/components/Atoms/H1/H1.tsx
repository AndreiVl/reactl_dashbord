import React from 'react';

import './h1.scss';

type H1Props = {
	className?: string,
	children: React.ReactNode
}

export const H1: React.FC<H1Props> = ({
	className = '',
	children,
}) => {
	return (
		<h1 className={`h1 ${className || ""}`}>
			{children}
		</h1>
	)
}