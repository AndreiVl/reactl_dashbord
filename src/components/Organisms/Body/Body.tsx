import React from 'react';
import './body.scss';

type BodyProps = {
	className?: string
	children: React.ReactNode
}

export const Body: React.FC<BodyProps> = ({
	className,
	children
}) => {
	return (
		<div className={`body ${className || ''}`}>
			{children}
		</div>
	)
}