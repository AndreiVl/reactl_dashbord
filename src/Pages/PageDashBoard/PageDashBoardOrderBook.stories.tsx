import React from 'react';
import { PageDashBoard } from './PageDashBoard';
import { OrderBook } from '../../components/Organisms/OrderBook/OrderBook';
import { H1 } from '../../components/Atoms/H1/H1';
import { Text } from '../../components/Atoms/Text/Text';
import { Btn } from '../../components/Atoms/Btn/Btn';
import { TabBar } from '../../components/Molecules/TabBar/TabBar';
import { Icon } from '../../components/Atoms/Icon/Icon';
import { Order } from '../../components/Organisms/Order/Order';
import { H2 } from '../../components/Atoms/H2/H2';
import { Checkbox } from '../../components/Atoms/Checkbox/Checkbox';
import { OrderItem } from '../../components/Molecules/OrderItem/OrderItem';
import IconRefresh from '../../assets/Icons/icon--refresh.svg';
import IconSearch from '../../assets/Icons/icon--search.svg';
import IconBtcOrange from '../../assets/Icons/icon--btc-orange.svg';

export default {
	title: 'Pages/PageDashBoard/OrderBook',
	component: PageDashBoard,
};


export const PageDashBoardOrderBook = () => (
	<PageDashBoard
		content={
			<OrderBook
				title={
					<H1 text='Your Orders' />
				}
				lead={
					<Text>See full list of your orders of your account</Text>
				}
				btnTopOne={
					<Btn buttonText='Get statement' type='btn--outline' />
				}
				btnTopTwo={
					<Btn buttonText='Buy Coin' />
				}
				tabs={
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
							<Order
								title={
									<H2 text='All Orders' />
								}
								controlOne={
									<Checkbox
										name='accept'
										value='accept'
										text={
											<Text>Show Cancelled</Text>
										}
									/>
								}
								controlTwo={
									<Btn icon
										iconLeft={
											<Icon
												icons={IconSearch}
												name='icon--search'
											/>
										}
									/>
								}
								orderItems={[
									{
										date: <Text fontWeight='text--semibold'>November, 2020</Text>,
										orderItem: [
											<OrderItem
												title='Buy Ethereum'
												crypto='0.5384 ETH'
												date='Nov 12, 2019 11:34 PM'
												currency='3,980.93 USD'
											/>,
											<OrderItem
												title='Buy Bitcoin'
												crypto='0.5384 BTC'
												date='Nov 12, 2019 11:34 PM'
												currency='3,980.93 USD'
												icon={IconBtcOrange}
												iconName='icon--btc-orange'
											/>
										]
									},
									{
										date: <Text fontWeight='text--semibold'>October, 2020</Text>,
										orderItem: [
											<OrderItem
												title='Buy Bitcoin'
												crypto='0.5384 BTC'
												date='Nov 12, 2019 11:34 PM'
												currency='3,980.93 USD'
												icon={IconBtcOrange}
												iconName='icon--btc-orange'
											/>,
											<OrderItem
												title='Buy Bitcoin'
												crypto='0.5384 BTC'
												date='Nov 12, 2019 11:34 PM'
												currency='3,980.93 USD'
												icon={IconBtcOrange}
												iconName='icon--btc-orange'
											/>
										]
									}
								]}
							/>,
							<Order
								title={
									<H2 text='All Orders' />
								}
								controlOne={
									<Checkbox
										name='accept'
										value='accept'
										text={
											<Text>Show Cancelled</Text>
										}
									/>
								}
								controlTwo={
									<Btn icon
										iconLeft={
											<Icon
												icons={IconSearch}
												name='icon--search'
											/>
										}
									/>
								}
								orderItems={[
									{
										date: <Text fontWeight='text--semibold'>November, 2020</Text>,
										orderItem: [
											<OrderItem
												title='Buy Ethereum'
												crypto='0.5384 ETH'
												date='Nov 12, 2019 11:34 PM'
												currency='3,980.93 USD'
											/>,
											<OrderItem
												title='Buy Bitcoin'
												crypto='0.5384 BTC'
												date='Nov 12, 2019 11:34 PM'
												currency='3,980.93 USD'
												icon={IconBtcOrange}
												iconName='icon--btc-orange'
											/>
										]
									}
								]}
							/>,
							<Order
								title={
									<H2 text='All Orders' />
								}
								controlOne={
									<Checkbox
										name='accept'
										value='accept'
										text={
											<Text>Show Cancelled</Text>
										}
									/>
								}
								controlTwo={
									<Btn icon
										iconLeft={
											<Icon
												icons={IconSearch}
												name='icon--search'
											/>
										}
									/>
								}
								orderItems={[
									{
										date: <Text fontWeight='text--semibold'>November, 2020</Text>,
										orderItem: [
											<OrderItem
												title='Buy Ethereum'
												crypto='0.5384 ETH'
												date='Nov 12, 2019 11:34 PM'
												currency='3,980.93 USD'
											/>
										]
									}
								]}
							/>,
						]}
					/>
				}
				more={
					<Btn buttonText='Load More' type='btn--flat'
						iconLeft={
							<Icon
								name='icon--refresh'
								icons={IconRefresh}
							/>
						}
					/>
				}
			/>
		}
	/>
);