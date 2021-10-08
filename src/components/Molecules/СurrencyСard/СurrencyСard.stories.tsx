import React from "react";
import { СurrencyСard } from './СurrencyСard';
import IconBtc from '../../../assets/Icons/icon--btc.svg';

export default {
	title: 'Components/Molecules/СurrencyСard',
	component: СurrencyСard,
};

export const СurrencyСardDefault = () => (
	<СurrencyСard
		name='BTC Wallet'
		total='15.12548 BTC'
		course='1,125.4 USD'
		icon={IconBtc}
		iconName='icon--btc'
	/>
);