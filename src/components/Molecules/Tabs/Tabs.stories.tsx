import React from 'react';
import { Tabs } from './Tabs';

export default {
	title: 'Components/Molecules/Tabs',
	component: Tabs,
};

export const TabsDefault = () => (
	<Tabs
		items={[
			{
				active: true,
				href: '#',
				link: 'Personal'
			},
			{
				href: '#',
				link: 'Security'
			},
			{
				href: '#',
				link: 'Notifications'
			},
			{
				href: '#',
				link: 'Connect Social'
			}
		]}
	/>
);

export const TabsNoti = () => (
	<Tabs
		items={[
			{
				active: true,
				href: '#',
				link: 'Personal',
				number: 10
			},
			{
				href: '#',
				link: 'Security'
			},
			{
				href: '#',
				link: 'Notifications'
			},
			{
				href: '#',
				link: 'Connect Social'
			}
		]}
	/>
);