import * as React from 'react'
import './input.scss'

type InputProps = {
	placeholder?: string,
	value?: string,
	name: string,
	type: string,
	inputMod?: inputMod,
	labelText?: string,
}

type inputMod = 'border';

export const Input: React.FC<InputProps> = ({
	placeholder = '',
	value = '',
	name = '',
	type = '',
	inputMod,
	labelText,
}) => {
	return (
		<div className={`input ${inputMod ? `input--${inputMod}` : ''}`}>
			{labelText &&
				<label htmlFor={name}>{labelText}</label>
			}
			<input className={`input__input`} type={type} name={name} defaultValue={value} placeholder={placeholder} id={name} />
		</div >
	);
};