import React from "react";
import { Checkbox } from "./Checkbox";
import { Text } from "../Text/Text";

export default {
	title: 'Components/Atoms/Checkbox',
	component: Checkbox,
};

export const CheckboxDefault = () => (
	<Checkbox
		name='accept'
		value='accept'
		text={
			<Text>accept</Text>
		}
	/>
)
export const CheckboxCheck = () => (
	<Checkbox
		name='check'
		value='check'
		checked
		text={
			<Text>check</Text>
		}
	/>
)
export const CheckboxDese = () => (
	<Checkbox
		name='dese'
		value='dese'
		text={
			<Text>dese</Text>
		}
		disabled
	/>
)
export const CheckboxDis = () => (
	<Checkbox
		name='dis'
		value='dis'
		text={
			<Text>dis</Text>
		}
		checked
		disabled
	/>
)