import React from 'react';

import './h1.scss';

type H1Props = {
	className?: string
	text?: string
}

export const H1: React.FC<H1Props> = ({
	className = '',
	text = 'Title H1',
}) => {
	return (
		<h1 className={`h1 ${className || ""}`}>
			{text}
		</h1>
	)
}