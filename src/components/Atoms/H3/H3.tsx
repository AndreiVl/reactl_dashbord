import React from 'react';
import './h3.scss';

type H3Props = {
	className?: string
	text?: string
}

export const H3: React.FC<H3Props> = ({
	className = '',
	text = 'Title H3',
}) => {
	return (
		<h3 className={`h3 ${className || ""}`}>
			{text}
		</h3>
	)
}