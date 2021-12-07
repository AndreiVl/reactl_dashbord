import React from 'react';
import { Settings } from './Settings';
import { H1 } from '../../Atoms/H1/H1';
import { Text } from '../../Atoms/Text/Text';
import { TabBar } from '../../Molecules/TabBar/TabBar';

export default {
	title: 'Components/Organisms/Settings',
	component: Settings,
};


export const SettingsDefault = () => (
	<Settings
		title={
			<H1 text='My Profile' />
		}
		lead={
			<Text>You have full control to manage your own account setting.</Text>
		}
		tabs={
			<TabBar
				tabItems={[
					{
						tab: 'Personal'
					},
					{
						tab: 'Security',
					},
					{
						tab: 'Notifications',
					},
					{
						tab: 'Connect Social',
					}
				]}
				contentItems={[
					'1',
					'2',
					'3',
					'4',
				]}
			/>
		}
	/>
);