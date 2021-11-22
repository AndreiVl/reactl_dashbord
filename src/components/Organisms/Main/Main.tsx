import React from 'react';
import './main.scss';

type MainProps = {
	className?: string
	children?: React.ReactNode,
}

export const Main: React.FC<MainProps> = ({
	className = '',
	children,
}) => {
	return (
		<main className={`main ${className || ''}`}>
			{children}
		</main>
	)
}