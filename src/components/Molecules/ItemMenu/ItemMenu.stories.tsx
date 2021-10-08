import React from "react";
import { ItemMenu } from "./ItemMenu";
import IconWeb from '../../../assets/Icons/icon--web.svg';

export default {
	title: 'Components/Molecules/ItemMenu',
	component: ItemMenu,
};

export const ItemMenuDashboard = () => (
	<ItemMenu
		link='Dashboard'
		icon={IconWeb}
		iconName='icon--web'
	/>
);