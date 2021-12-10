import React from "react";
import './big-text.scss'

type BigTextProps = {
	children: React.ReactNode,
}

export const BigText: React.FC<BigTextProps> = ({
	children,
}) => {
	return (
		<p className="big-text">
			{children}
		</p>
	)
}