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