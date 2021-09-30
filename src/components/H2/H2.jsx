import React from 'react';

import './h2.scss';

export const H2 = ({
	className,
	text,
}) => (
	<h2 className={`h2 ${className || ""}`}>
		{text}
	</h2>
);