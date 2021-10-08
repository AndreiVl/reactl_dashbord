import React from "react";
import { Checkbox } from "./Checkbox";

export default {
	title: 'Components/Atoms/Checkbox',
	component: Checkbox,
};

export const CheckboxDefault = () => (
	<Checkbox
		name='accept'
		value='accept'
		text="accept"
	/>
)
export const CheckboxCheck = () => (
	<Checkbox
		name='check'
		value='check'
		checked
		text="check"
	/>
)
export const CheckboxDese = () => (
	<Checkbox
		name='dese'
		value='dese'
		text="dese"
		disabled
	/>
)
export const CheckboxDis = () => (
	<Checkbox
		name='dis'
		value='dis'
		text="dis"
		checked
		disabled
	/>
)