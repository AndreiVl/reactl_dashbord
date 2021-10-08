import React from "react";
import './header-profile.scss';
import { Text } from '../../Atoms/Text/Text';
import { UerPik } from '../../Atoms/UerPik/UerPik';
import UserPik from '../../../assets/images/user-pic__img-01.png'
import UserPik2x from '../../../assets/images/user-pic__img-01@2x.png'


type HeaderProfileProps = {
	url?: string,
	text?: string,
	img?: string,
	img2x?: string,
	imgAlt?: string,
	imgTitle?: string,
	className?: string
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({
	url = '#',
	text = 'Constance Fields',
	img = UserPik,
	img2x = UserPik2x,
	imgAlt = 'Author',
	imgTitle = 'Author',
	className
}) => {
	return (
		<div className={`header-profile ${className || ''}`}>
			<a href={url} target="_blank" className='header-profile__link'>
				<Text>
					{text}
				</Text>
			</a>
			<UerPik
				img={img}
				img2x={img2x}
				imgAlt={imgAlt}
				imgTitle={imgTitle}
			/>
		</div>
	)
}
