import React from 'react';
import './page.scss';

type PageProps = {
	children?: React.ReactNode
}

export const Page: React.FC<PageProps> = ({
	children,
}) => {
	return (
		<div className='page'>
			{children}
		</div>
	)
}
