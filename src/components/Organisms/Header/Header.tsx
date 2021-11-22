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