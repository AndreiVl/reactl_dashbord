import React from "react";
import './big-text.scss'

type BigTextProps = {
	text?: string
}

export const BigText: React.FC<BigTextProps> = ({
	text = 'Big Text'
}) => {
	return (
		<p className="big-text">
			{text}
		</p>
	)
}