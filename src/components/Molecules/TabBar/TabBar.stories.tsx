import React from 'react';
import { TabBar } from './TabBar';

export default {
	title: 'Components/Molecules/TabBar',
	component: TabBar,
};

export const TabsDefault = () => (
	<TabBar
		tabItems={[
			{
				tab: 'History'
			},
			{
				tab: 'Sells',
				number: 10,
				red: true
			},
			{
				tab: 'Scheduled',
				number: 10,
			}
		]}
		contentItems={[
			'1',
			'2',
			'3',
		]}
	/>
);

// export const TabsNoti = () => (
// 	<Tabs
// 		items={[
// 			{
// 				active: true,
// 				href: '#',
// 				link: 'Personal',
// 				number: 10
// 			},
// 			{
// 				href: '#',
// 				link: 'Security'
// 			},
// 			{
// 				href: '#',
// 				link: 'Notifications'
// 			},
// 			{
// 				href: '#',
// 				link: 'Connect Social'
// 			}
// 		]}
// 	/>
// );