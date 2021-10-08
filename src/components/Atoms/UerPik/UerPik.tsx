import React from "react";
import './user-pik.scss'
import UserPik from '../../../assets/images/user-pic__img-01.png'
import UserPik2x from '../../../assets/images/user-pic__img-01@2x.png'

type UerPikProps = {
	img?: string,
	img2x?: string,
	imgAlt?: string,
	imgTitle?: string,
	active?: 'user-pic--big-activ' | 'user-pic--big-noactiv',
	size?: boolean
	className?: string
}

export const UerPik: React.FC<UerPikProps> = ({
	img = UserPik,
	img2x = UserPik2x,
	imgAlt = 'UserPik',
	imgTitle = 'UserPik',
	active = true,
	size = false,
	className
}) => {
	return (
		<div className={`user-pik ${className || ''} 
		${active || ''}
		${size ? 'user-pic--big' : ''}
		`}>
			<picture>
				<img className='user-pik__img' src={img} alt={imgAlt} srcSet={img2x} title={imgTitle} />
			</picture>
		</div>
	)
}