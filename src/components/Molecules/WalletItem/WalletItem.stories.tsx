import React from 'react';
import { WalletItem } from './WalletItem';
import IconBtc from '../../../assets/Icons/icon--btc.svg';
import IconMore from '../../../assets/Icons/icon--more.svg';



export default {
	title: 'Components/Molecules/WalletItem',
	component: WalletItem,
};


export const WalletItemDefault = () => (
	<WalletItem
		icons={IconBtc}
		name='icon--btc'
		iconMod='icon--32'
		iconBtn={IconMore}
		iconNameBtn='icon--more'
		title='Bitcoin Wallet'
		crypto='26.509505 BTC'
		currency='10,924.63USD'
		itemsLink={[
			{
				href: '#',
				link: 'Send'
			},
			{
				href: '#',
				link: 'Receive'
			},
			{
				href: '#',
				link: 'Withdraw'
			}
		]}
	/>
);