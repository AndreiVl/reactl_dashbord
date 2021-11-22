import React from 'react';
import './header.scss';
import { Btn } from '../../Atoms/Btn/Btn';
import { Icon } from '../../Atoms/Icon/Icon';
import IconApps from '../../../assets/Icons/icon--apps.svg';
import IconMail from '../../../assets/Icons/icon--mail.svg';
import IconNotifications from '../../../assets/Icons/icon--notifications.svg';
import IconHamburger from '../../../assets/Icons/icon--hamburger.svg';

type HeaderProps = {
	className?: string,
	logo?: React.ReactNode,
	serch?: React.ReactNode,
	headerProfile?: React.ReactNode,
}

export const Header: React.FC<HeaderProps> = ({
	className = '',
	logo,
	serch,
	headerProfile,
}) => {
	return (
		<header className={`header ${className || ''}`}>
			<div className="header__left">
				{logo}
				<Btn icon
					iconRight={
						<Icon icons={IconHamburger} name='icon--hamburger' />
					}
				/>
			</div>

			<div className="header__right">
				<div className="header__serch">
					{serch}
				</div>

				<div className="header__action">
					<div className="header__action-btn">
						<Btn icon
							iconRight={
								<Icon icons={IconApps} name='icon--apps' />
							}
						/>

						<Btn icon
							iconRight={
								<Icon icons={IconMail} name='icon--mail' />
							}
						/>

						<Btn icon
							iconRight={
								<Icon icons={IconNotifications} name='icon--notifications' />
							}
						/>
					</div>

					{headerProfile}
				</div>
			</div>
		</header>
	)
}

// header.header
// 	div.header__left
// 		+logo({img: 'logo.svg', alt: 'Crypto', title: 'Crypto'})
// 		+btn({icon_l: 'icon--hamburger'})(class="icon--block")
// 	div.header__right
// 		div.header__serch
// 			+search({label_text: false, icon: 'icon--search', type: 'text', name: 'serch', placeholder: 'Search here...'})

// 		div.header__action
// 			div.header__action-btn
// 				+btn({icon_l: 'icon--apps'})(class="icon--block")
// 				+btn({icon_l: 'icon--mail'})(class="icon--block")
// 				+btn({icon_l: 'icon--notifications'})(class="icon--block")
// 			+header-profile({text: 'Constance Fields', img: 'user-pic__img-01', alt: 'Author', title: 'Author'})