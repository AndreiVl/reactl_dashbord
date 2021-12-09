import React from 'react';
import { Settings } from '../components/Organisms/Settings/Settings';
import { SettingPersonal } from '../components/Organisms/SettingPersonal/SettingPersonal';
import { SettingItem } from '../components/Molecules/SettingItem/SettingItem';
import { H1 } from '../components/Atoms/H1/H1';
import { H2 } from '../components/Atoms/H2/H2';
import { Text } from '../components/Atoms/Text/Text';
import { Link } from '../components/Atoms/Link/Link';
import { Btn } from '../components/Atoms/Btn/Btn';
import { TabBar } from '../components/Molecules/TabBar/TabBar';

type PageSettingsProps = {

}

export const PageSettings: React.FC<PageSettingsProps> = ({


}) => {
	return (
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
								<Btn
									buttonText='Upgrade'
								/>
							}
							title={
								<H2 text='Personal Information' />
							}
							lead={
								<Text fontWeight='text--semibold' >
									Basic info, like your name and address, that you use on Nio Platform.</Text>
							}
							subtitle={
								<Text fontWeight='text--bold' size='text--sm' uppercase >
									BASICS
								</Text>
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
								<Text fontWeight='text--bold' size='text--sm' uppercase >
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
								<Btn
									buttonText='Upgrade'
								/>
							}
							title={
								<H2 text='Security' />
							}
							lead={
								<Text fontWeight='text--semibold' >
									Basic info, like your name and address, that you use on Nio Platform.</Text>
							}
							subtitle={
								<Text fontWeight='text--bold' size='text--sm' uppercase >
									BASICS
								</Text>
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
								<Btn
									buttonText='Upgrade'
								/>
							}
							title={
								<H2 text='Notifications' />
							}
							lead={
								<Text fontWeight='text--semibold' >
									Basic info, like your name and address, that you use on Nio Platform.
								</Text>
							}
							subtitleTwo={
								<Text fontWeight='text--bold' size='text--sm' uppercase >
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
								<Btn
									buttonText='Upgrade'
								/>
							}
							title={
								<H2 text='Connect Social' />
							}
							lead={
								<Text fontWeight='text--semibold' >
									Basic info, like your name and address, that you use on Nio Platform.
								</Text>
							}
						/>,
					]}
				/>
			}
		/>
	)
}