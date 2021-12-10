import React from 'react';

import './h2.scss';

type H2Props = {
	className?: string,
	children: React.ReactNode,
}

export const H2: React.FC<H2Props> = ({
	className = '',
	children,
}) => {
	return (
		<h2 className={`h2 ${className || ""}`}>
			{children}
		</h2>
	)
}