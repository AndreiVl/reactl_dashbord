import React from "react";
import { SettingItem } from "./SettingItem";

export default {
	title: 'Components/Molecules/SettingItem',
	component: SettingItem,
};

export const SettingItemDefault = () => (
	<SettingItem
		settingItemBtn
	/>
);
export const SettingItemLink = () => (
	<SettingItem
		settingItemLink='Link'
	/>
);