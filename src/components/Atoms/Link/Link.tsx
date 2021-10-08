import React from "react";
import './link.scss'

type LinkProps = {
	href?: string,
	className?: string
	mod?: 'link--black' | 'link--textdecor' | 'link--gray',
	children: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({
	href = '#',
	className,
	children,
	mod
}) => {
	return (
		<a href={href} className={`link ${className || ''} ${mod || ''}`}>
			{children}
		</a>
	)
}