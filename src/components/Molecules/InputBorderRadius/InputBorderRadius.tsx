import React from "react";
import './input-border-radius.scss';
import { Input } from '../../Atoms/Input/Input'

type InputBorderRadiusProps = {
	placeholder?: string,
	value?: string,
	name: string,
	type: string,
	className?: string
}

export const InputBorderRadius: React.FC<InputBorderRadiusProps> = ({
	placeholder = 'Type to message',
	value = '',
	name = 'serch-massage',
	type = '',
	className,
}) => {
	return (
		<div className={`input-border-radius ${className || ''}`}>
			<Input
				placeholder={placeholder}
				name={name}
				type={type}
				value={value}
			/>
		</div>
	)
}