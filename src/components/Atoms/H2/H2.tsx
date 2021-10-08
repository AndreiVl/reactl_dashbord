import React from 'react';

import './h2.scss';

type H2Props = {
	className?: string
	text?: string
}

export const H2: React.FC<H2Props> = ({
	className = '',
	text = 'Title H2',
}) => {
	return (
		<h2 className={`h2 ${className || ""}`}>
			{text}
		</h2>
	)
}