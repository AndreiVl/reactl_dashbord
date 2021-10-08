import * as React from 'react'
import './input.scss'

type InputProps = {
	placeholder?: string,
	value?: string,
	name: string,
	type: string,
}

export const Input: React.FC<InputProps> = ({
	placeholder = '',
	value = '',
	name = '',
	type = ''
}) => {
	return (
		<div className="input">
			<input className="input__input" type={type} name={name} defaultValue={value} placeholder={placeholder} id={name} />
		</div>
	);
};