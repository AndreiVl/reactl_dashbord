import React from 'react';
import { H3 } from './H3';

export default {
	title: 'Components/Atoms/H3',
	component: H3,
};


export const H3Default = () => (
	<H3 />
);
export const H3Gray = () => (
	<H3
		className="h3--gray"
	/>
);