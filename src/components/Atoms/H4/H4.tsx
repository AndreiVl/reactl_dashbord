import React from 'react';
import './h4.scss';

type H4Props = {
	className?: string
	text?: string
}

export const H4: React.FC<H4Props> = ({
	className = '',
	text = 'Title H4',
}) => {
	return (
		<h4 className={`h4 ${className || ""}`}>
			{text}
		</h4>
	)
}