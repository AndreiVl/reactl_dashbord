import React from 'react';
import { Sidebar } from './Sidebar';
import { Link } from '../../Atoms/Link/Link';
import { Logo } from '../../Atoms/Logo/Logo';
import { Menu } from '../../Molecules/Menu/Menu';
import { ItemMenu } from '../../Molecules/ItemMenu/ItemMenu';
import IconWeb from '../../../assets/Icons/icon--web.svg';
import IconListt from '../../../assets/Icons/icon--list.svg';
import IconPlanet from '../../../assets/Icons/icon--planet.svg';
import IconCard from '../../../assets/Icons/icon--card.svg';
import IconRepeat from '../../../assets/Icons/icon--repeat.svg';
import IconSettings from '../../../assets/Icons/icon--settings.svg';
import IconRefresh from '../../../assets/Icons/icon--refresh.svg';
import IconExit from '../../../assets/Icons/icon--exit.svg';
import IconHelp from '../../../assets/Icons/icon--help.svg';

export default {
	title: 'Components/Organisms/Sidebar',
	component: Sidebar,
};


export const SidebarDefault = () => (
	<Sidebar
		logo={
			<Logo />
		}
		menuItemsS={[
			<Menu
				title='Main'
				items={[
					{
						menuUrl: '#',
						menuLink: 'Dashboard',
						menuIcon: IconWeb,
						menuIconName: 'icon--web'
					},
					{
						menuUrl: '#',
						menuLink: 'Order Book',
						menuIcon: IconListt,
						menuIconName: 'icon--list'
					},
					{
						menuUrl: '#',
						menuLink: 'Exchange',
						menuIcon: IconPlanet,
						menuIconName: 'icon--planet'
					},
					{
						menuUrl: '#',
						menuLink: 'Wallets',
						menuIcon: IconCard,
						menuIconName: 'icon--card'
					},
					{
						menuUrl: '#',
						menuLink: 'Transactions',
						menuIcon: IconRepeat,
						menuIconName: 'icon--repeat'
					},
					{
						menuUrl: '#',
						menuLink: 'Settings',
						menuIcon: IconSettings,
						menuIconName: 'icon--settings'
					}
				]}
			/>,
			<Menu
				title='Additional'
				items={[
					{
						menuUrl: '#',
						menuLink: 'Referral',
						menuIcon: IconRefresh,
						menuIconName: 'icon--refresh'
					},
					{
						menuUrl: '#',
						menuLink: 'Logout',
						menuIcon: IconExit,
						menuIconName: 'icon--exit'
					}
				]}
			/>,
		]}
		itemMenu={
			<ItemMenu
				link='Help'
				icon={IconHelp}
				iconName='icon--help'
				className='item-menu--pd'
			/>
		}
		copy='Copyright © 2020'
		link={
			<Link>NG8.RU</Link>
		}
	/>
);