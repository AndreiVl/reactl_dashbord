import React from "react";
import './link.scss'

type LinkProps = {
	href?: string,
	text?: string,
	className?: string
	mod?: 'link--black' | 'link--textdecor' | 'link--gray'
}

export const Link: React.FC<LinkProps> = ({
	href = '#',
	text = 'Text Link',
	className,
	mod
}) => {
	return (
		<a href={href} className={`link ${className || ''} ${mod || ''}`}>{text}</a>
	)
}