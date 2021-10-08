import React from "react";
import './text.scss';

type TextProps = {
	fontWeight?: 'text--bold' | 'text--semibold',
	size?: 'text--sm' | 'text--esm',
	color?: 'text--black' | 'text--white',
	uppercase?: boolean
	className?: string
	children: React.ReactNode
}

export const Text: React.FC<TextProps> = ({
	fontWeight = '',
	size = '',
	color = '',
	uppercase = false,
	className,
	children,
}) => {
	return (
		<p className={`text ${fontWeight || ''} ${size || ''} ${color || ''} 
		${uppercase ? 'text--uppercase' : ''} ${className || ""}
		`}>
			{children}
		</p>
	)
}