import React, { ReactNode } from "react";
import './logo.scss'

import LogoImg from '../../../assets/images/logo.svg'

type LogoProps = {
	className?: string
}

export const Logo: React.FC<LogoProps> = ({
	className,
}) => {
	return (
		<a href="/" className={`logo ${className || ""}`}>
			<img src={LogoImg} alt="CRYPTO" />
		</a>
	)
}