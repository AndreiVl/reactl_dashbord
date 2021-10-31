import React from 'react';
import { TransactionsItem } from './TransactionsItem';
import ImgArrowsGreen from '../../../assets/images/transactions-item__img-arrows-green.svg';



export default {
	title: 'Components/Molecules/TransactionsItem',
	component: TransactionsItem,
};


export const TransactionsItemDefault = () => (
	<TransactionsItem
		textOne='2dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4v5d4x54dA5A5A52dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4 '
		textTwo='4dA5A5A52dxg25454841132457d21564d1321d35'
		img={ImgArrowsGreen}
		imgAlt='Img Arrows Green'
		date='2017-12-03 13:57:30'
		crypto='0.35473875 BTC'
	/>
);

export const TransactionsIteBadge = () => (
	<TransactionsItem
		textOne='2dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4v5d4x54dA5A5A52dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4 '
		textTwo='4dA5A5A52dxg25454841132457d21564d1321d35'
		img={ImgArrowsGreen}
		imgAlt='Img Arrows Green'
		date='2017-12-03 13:57:30'
		crypto='0.35473875 BTC'
		bottom
		badge={{
			text: 'Accept',
			size: 'badge--big',
			color: 'badge--green'
		}}
	/>
);

export const TransactionsIteConferm = () => (
	<TransactionsItem
		textOne='2dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4v5d4x54dA5A5A52dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4 '
		textTwo='4dA5A5A52dxg25454841132457d21564d1321d35'
		img={ImgArrowsGreen}
		imgAlt='Img Arrows Green'
		date='2017-12-03 13:57:30'
		crypto='0.35473875 BTC'
		bottom
		conferm='08545631031'
	/>
);