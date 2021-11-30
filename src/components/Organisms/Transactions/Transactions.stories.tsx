import React from 'react';
import { Transactions } from './Transactions';
import { H1 } from '../../Atoms/H1/H1';
import { H2 } from '../../Atoms/H2/H2';
import { SummaryItem } from '../../Atoms/SummaryItem/SummaryItem';
import { TransactionsItem } from '../../Molecules/TransactionsItem/TransactionsItem';
import IconChart from '../../../assets/Icons/icon--chart.svg';
import ImgArrowsGreen from '../../../assets/images/transactions-item__img-arrows-green.svg';
import ImgArrowsRed from '../../../assets/images/transactions-item__img-arrows-red.svg';

export default {
	title: 'Components/Organisms/Transactions',
	component: Transactions,
};


export const TransactionsDefault = () => (
	<Transactions
		title={
			<H1 text='Transactions' />
		}
		lefTitle={
			<H2 text='Summary' />
		}
		summaryItemsLeft={[
			<SummaryItem
				title='Address'
				text='2dxg25454841132457d21564d1321d35d5'
			/>,
			<SummaryItem
				className='summary-item--white'
				title='Hash 160'
				text='3df2dfds24478454d445d5sf454df545d'
			/>,
			<SummaryItem
				title='Tools'
				text='Related Tags - Unspent Outputs'
			/>
		]}
		rightTitle={
			<H2 text='Transactions' />
		}
		summaryItemsRight={[
			<SummaryItem
				className="summary-item--icon"
				title='No. Transactions'
				text='54'
				icon={IconChart}
				iconName="icon--chart"
			/>,
			<SummaryItem
				className="summary-item--icon"
				title='Total Received'
				text='95.12345 BTC'
				icon={IconChart}
				iconName="icon--chart"
			/>,
			<SummaryItem
				className="summary-item--icon"
				title='Total Balance'
				text='0 BTC'
				icon={IconChart}
				iconName="icon--chart"
			/>
		]}
		subTitle={
			<H2 text='Transactions' />
		}
		transactionsItems={[
			<TransactionsItem
				textOne='2dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4v5d4x54dA5A5A52dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4 '
				textTwo='4dA5A5A52dxg25454841132457d21564d1321d35'
				img={ImgArrowsGreen}
				imgAlt='Img Arrows Green'
				date='2017-12-03 13:57:30'
				crypto='0.35473875 BTC'
				bottom
				conferm='12 Confirmation'
				badge={{
					text: '1.124589756 BTC',
					size: 'badge--big',
					color: 'badge--green'
				}}
			/>,
			<TransactionsItem
				textOne='2dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4v5d4x54dA5A5A52dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4 '
				textTwo='4dA5A5A52dxg25454841132457d21564d1321d35'
				img={ImgArrowsRed}
				imgAlt='Img Arrows Red'
				date='2017-12-03 13:57:30'
				crypto='0.35473875 BTC'
				bottom
				conferm='12 Confirmation'
				badge={{
					text: '1.124589756 BTC',
					size: 'badge--big',
					color: 'badge--red'
				}}
			/>,
			<TransactionsItem
				textOne='2dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4v5d4x54dA5A5A52dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4 '
				textTwo='4dA5A5A52dxg25454841132457d21564d1321d35'
				img={ImgArrowsGreen}
				imgAlt='Img Arrows Green'
				date='2017-12-03 13:57:30'
				crypto='0.35473875 BTC'
				bottom
				conferm='12 Confirmation'
				badge={{
					text: '1.124589756 BTC',
					size: 'badge--big',
					color: 'badge--green'
				}}
			/>,
			<TransactionsItem
				textOne='2dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4v5d4x54dA5A5A52dxg25454841132457d21564d1321d35d5zxd54d545dv4v34d54v5d4 '
				textTwo='4dA5A5A52dxg25454841132457d21564d1321d35'
				img={ImgArrowsRed}
				imgAlt='Img Arrows Red'
				date='2017-12-03 13:57:30'
				crypto='0.35473875 BTC'
				bottom
				conferm='12 Confirmation'
				badge={{
					text: '1.124589756 BTC',
					size: 'badge--big',
					color: 'badge--red'
				}}
			/>,
		]}
	/>
);