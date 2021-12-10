import React from 'react';
import './h4.scss';

type H4Props = {
	className?: string,
	children: React.ReactNode,
}

export const H4: React.FC<H4Props> = ({
	className = '',
	children,
}) => {
	return (
		<h4 className={`h4 ${className || ""}`}>
			{children}
		</h4>
	)
}