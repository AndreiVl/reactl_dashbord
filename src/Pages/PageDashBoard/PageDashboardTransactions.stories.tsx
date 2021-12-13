import React from 'react';
import { PageDashBoard } from './PageDashBoard';
import { Transactions } from '../../components/Organisms/Transactions/Transactions';
import { H1 } from '../../components/Atoms/H1/H1';
import { H2 } from '../../components/Atoms/H2/H2';
import { Badge } from '../../components/Atoms/Badge/Badge';
import { SummaryItem } from '../../components/Atoms/SummaryItem/SummaryItem';
import { TransactionsItem } from '../../components/Molecules/TransactionsItem/TransactionsItem';
import IconChart from '../../assets/Icons/icon--chart.svg';
import ImgArrowsGreen from '../../assets/images/transactions-item__img-arrows-green.svg';
import ImgArrowsRed from '../../assets/images/transactions-item__img-arrows-red.svg';

export default {
	title: 'Pages/PageDashBoard/Transactions',
	component: PageDashBoard,
};


export const PageDashBoardTransactions = () => (
	<PageDashBoard
		content={
			<Transactions
				title={
					<H1>
						Transactions
					</H1>
				}
				lefTitle={
					<H2>
						Summary
					</H2>
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
					<H2>
						Transactions
					</H2>
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
					<H2>
						Transactions
					</H2>
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
						badge={
							<Badge size='badge--big' color='badge--green' >1.124589756 BTC</Badge>
						}

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
						badge={<Badge size='badge--big' color='badge--red' >1.124589756 BTC</Badge>}
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
						badge={<Badge size='badge--big' color='badge--green' >1.124589756 BTC</Badge>}
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
						badge={<Badge size='badge--big' color='badge--red' >1.124589756 BTC</Badge>}
					/>,
				]}
			/>
		}
	/>
);