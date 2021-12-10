import React from "react";
import './text.scss';


export const TextSm: React.FC = props => (
	<Text size='text--sm'>
		{props.children}
	</Text>
)

export const TextM: React.FC = props => (
	<Text size='text--m'>
		{props.children}
	</Text>
)

export const TextEsm: React.FC = props => (
	<Text size='text--esm'>
		{props.children}
	</Text>
)

type TextProps = {
	size?: size,
	className?: string
	children: React.ReactNode
}

type size = 'text--sm' | 'text--esm' | 'text--m';

export const Text: React.FC<TextProps> = ({
	size = '',
	className,
	children,
}) => {
	return (
		<p className={`text ${className || ''} ${size || ''}`}>
			{children}
		</p>
	)
}