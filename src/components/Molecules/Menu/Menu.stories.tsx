import React from "react";
import { Menu } from "./Menu";
import IconWeb from '../../../assets/Icons/icon--web.svg';
import IconListt from '../../../assets/Icons/icon--list.svg';
import IconPlanet from '../../../assets/Icons/icon--planet.svg';
import IconCard from '../../../assets/Icons/icon--card.svg';
import IconRepeat from '../../../assets/Icons/icon--repeat.svg';
import IconSettings from '../../../assets/Icons/icon--settings.svg';

export default {
	title: 'Components/Molecules/Menu',
	component: Menu,
};


export const MenuDefault = () => (
	<Menu
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
	/>
);