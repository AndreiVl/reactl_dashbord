import React from 'react';
import { H3 } from './H3';

export default {
	title: 'Components/Atoms/H3',
	component: H3,
};


export const H3Default = () => (
	<H3>
		Title H3
	</H3>
);
export const H3Gray = () => (
	<H3 color='h3--gray'>
		Title H3
	</H3>
);