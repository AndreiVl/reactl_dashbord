import React from 'react';
import { Input } from './Input';

export default {
	title: 'Components/Atoms/Input',
	component: Input,
}

export const InputDefault = () => (
	<Input
		placeholder="Inputs"
		name="Inputs"
		type="text"
	/>
)