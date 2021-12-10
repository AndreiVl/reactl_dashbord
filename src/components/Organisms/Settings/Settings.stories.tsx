import React from 'react';
import { Settings } from './Settings';
import { SettingPersonal } from '../../Organisms/SettingPersonal/SettingPersonal';
import { SettingItem } from '../../Molecules/SettingItem/SettingItem';
import { H1 } from '../../Atoms/H1/H1';
import { H2 } from '../../Atoms/H2/H2';
import { Text, TextSm } from '../../Atoms/Text/Text';
import { Link } from '../../Atoms/Link/Link';
import { Btn } from '../../Atoms/Btn/Btn';
import { TabBar } from '../../Molecules/TabBar/TabBar';

export default {
	title: 'Components/Organisms/Settings',
	component: Settings,
};


export const SettingsDefault = () => (
	<Settings
		title={
			<H1>
				My Profile
			</H1>
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
					<SettingPersonal
						textUgrade={
							<Text>
								Upgrade your account to unlock full feature and increase your limit of transaction amount.
							</Text>
						}
						link={
							<Text>
								<Link mod='link--textdecor'>
									Learn More
								</Link>
							</Text>

						}
						button={
							<Btn>
								Upgrade
							</Btn>
						}
						title={
							<H2>
								Personal Information
							</H2>
						}
						lead={
							<Text>
								Basic info, like your name and address, that you use on Nio Platform.</Text>
						}
						subtitle={
							<TextSm>
								BASICS
							</TextSm>
						}
						settingPersonaBasics={[
							<SettingItem
								settingItemBtn
							/>,
							<SettingItem
								settingItemTitle='Display Name'
								settingItemInfo='Ishtiyak'
								settingItemBtn
							/>,
							<SettingItem
								settingItemTitle='Email'
								settingItemInfo='info@softnio.co'
								settingItemBtn
							/>,
							<SettingItem
								settingItemTitle='Phone Number'
								settingItemInfo='Not add yet'
								settingItemBtn
							/>,
							<SettingItem
								settingItemTitle='Date of Birth'
								settingItemInfo='2337 Kildeer Drive, Kentucky, Canada'
								settingItemBtn
							/>,
							<SettingItem
								settingItemTitle='Phone Number'
								settingItemInfo='Not add yet'
								settingItemBtn
							/>,
						]}
						subtitleTwo={
							<TextSm>
								PREFERENCES
							</TextSm>
						}
						settingPersonaPreference={[
							<SettingItem
								settingItemTitle='Language'
								settingItemInfo='English (United State)'
								settingItemLink='Change Language'
							/>,
							<SettingItem
								settingItemTitle='Date Format'
								settingItemInfo='M d, YYYY'
								settingItemLink='Change'
							/>,
							<SettingItem
								settingItemTitle='Timezone'
								settingItemInfo='info@softnio.co'
								settingItemLink='Bangladesh (GMT +6)'
							/>,
						]}
					/>,
					<SettingPersonal
						textUgrade={
							<Text>
								Upgrade your account to unlock full feature and increase your limit of transaction amount.
							</Text>
						}
						link={
							<Text>
								<Link mod='link--textdecor'>
									Learn More
								</Link>
							</Text>

						}
						button={
							<Btn>
								Upgrade
							</Btn>
						}
						title={
							<H2>
								Security
							</H2>
						}
						lead={
							<Text>
								Basic info, like your name and address, that you use on Nio Platform.</Text>
						}
						subtitle={
							<TextSm>
								BASICS
							</TextSm>
						}
						settingPersonaBasics={[
							<SettingItem
								settingItemBtn
							/>,
							<SettingItem
								settingItemTitle='Display Name'
								settingItemInfo='Ishtiyak'
								settingItemBtn
							/>,
							<SettingItem
								settingItemTitle='Email'
								settingItemInfo='info@softnio.co'
								settingItemBtn
							/>,
							<SettingItem
								settingItemTitle='Phone Number'
								settingItemInfo='Not add yet'
								settingItemBtn
							/>,
							<SettingItem
								settingItemTitle='Date of Birth'
								settingItemInfo='2337 Kildeer Drive, Kentucky, Canada'
								settingItemBtn
							/>,
							<SettingItem
								settingItemTitle='Phone Number'
								settingItemInfo='Not add yet'
								settingItemBtn
							/>
						]}
					/>,
					<SettingPersonal
						textUgrade={
							<Text>
								Upgrade your account to unlock full feature and increase your limit of transaction amount.
							</Text>
						}
						link={
							<Text>
								<Link mod='link--textdecor'>
									Learn More
								</Link>
							</Text>

						}
						button={
							<Btn>
								Upgrade
							</Btn>
						}
						title={
							<H2>
								Notifications
							</H2>
						}
						lead={
							<Text >
								Basic info, like your name and address, that you use on Nio Platform.
							</Text>
						}
						subtitleTwo={
							<Text >
								PREFERENCES
							</Text>
						}
						settingPersonaPreference={[
							<SettingItem
								settingItemTitle='Language'
								settingItemInfo='English (United State)'
								settingItemLink='Change Language'
							/>,
							<SettingItem
								settingItemTitle='Date Format'
								settingItemInfo='M d, YYYY'
								settingItemLink='Change'
							/>,
							<SettingItem
								settingItemTitle='Timezone'
								settingItemInfo='info@softnio.co'
								settingItemLink='Bangladesh (GMT +6)'
							/>,
						]}
					/>,
					<SettingPersonal
						textUgrade={
							<Text>
								Upgrade your account to unlock full feature and increase your limit of transaction amount.
							</Text>
						}
						link={
							<Text>
								<Link mod='link--textdecor'>
									Learn More
								</Link>
							</Text>

						}
						button={
							<Btn>
								Upgrade
							</Btn>
						}
						title={
							<H2>
								Connect Social
							</H2>
						}
						lead={
							<Text >
								Basic info, like your name and address, that you use on Nio Platform.
							</Text>
						}
					/>,
				]}
			/>
		}
	/>
);