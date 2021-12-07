import React from 'react';
import { SettingPersonal } from './SettingPersonal';
import { Text } from '../../Atoms/Text/Text';
import { Link } from '../../Atoms/Link/Link';
import { Btn } from '../../Atoms/Btn/Btn';
import { H2 } from '../../Atoms/H2/H2';
import { SettingItem } from '../../Molecules/SettingItem/SettingItem';

export default {
	title: 'Components/Organisms/SettingPersonal',
	component: SettingPersonal,
};


export const SettingPersonalDefault = () => (
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
			<H2>Personal Information</H2>
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
	/>
);