import React from 'react';

import './h1.scss';

export const H1 = ({
	className,
	text,
}) => (
	<h1 className={`h1 ${className || ""}`}>
		{text}
	</h1>
);