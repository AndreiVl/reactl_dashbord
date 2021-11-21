import React, { useState } from "react";
import './checkbox.scss'

interface CheckboxProps {
	name: string,
	value: string,
	text?: React.ReactNode,
	checked?: boolean,
	disabled?: boolean,
}

export const Checkbox: React.FC<CheckboxProps> = ({
	name = '',
	value = '',
	text,
	checked = false,
	disabled = false,
}) => {
	return (
		<div className="checkbox">
			<label htmlFor={name}>
				<input type="checkbox" name={name} id={name} value={value} defaultChecked={checked} disabled={disabled} />
				<span className="checkbox__visual"></span>
				{text}
			</label>
		</div>
	)
}