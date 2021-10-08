import React, { useState } from "react";
import './checkbox.scss'
import { Text } from '../Text/Text';

interface CheckboxProps {
	name: string,
	value: string,
	text?: string,
	checked?: boolean,
	disabled?: boolean,
}

export const Checkbox: React.FC<CheckboxProps> = ({
	name = '',
	value = '',
	text = 'checkbox',
	checked = false,
	disabled = false,
}) => {
	return (
		<div className="checkbox">
			<label htmlFor={name}>
				<input type="checkbox" name={name} id={name} value={value} defaultChecked={checked} disabled={disabled} />
				<span className="checkbox__visual"></span>
				{text &&
					<Text>{text}</Text>
				}
			</label>
		</div>
	)
}