import React from 'react';
import { OrderBook } from './OrderBook';
import { H1 } from '../../Atoms/H1/H1';
import { Text } from '../../Atoms/Text/Text';
import { Btn } from '../../Atoms/Btn/Btn';
import { TabBar } from '../../Molecules/TabBar/TabBar';
import { Icon } from '../../Atoms/Icon/Icon';
import { Order } from '../Order/Order';
import { H2 } from '../../Atoms/H2/H2';
import { Checkbox } from '../../Atoms/Checkbox/Checkbox';
import { OrderItem } from '../../Molecules/OrderItem/OrderItem';
import IconRefresh from '../../../assets/Icons/icon--refresh.svg';
import IconSearch from '../../../assets/Icons/icon--search.svg';
import IconBtcOrange from '../../../assets/Icons/icon--btc-orange.svg';



export default {
	title: 'Components/Organisms/OrderBook',
	component: OrderBook,
};


export const OrderBookDefault = () => (
	<OrderBook
		title={
			<H1>
				Your Orders
			</H1>
		}
		lead={
			<Text>See full list of your orders of your account</Text>
		}
		btnTopOne={
			<Btn type='btn--outline'>
				Get statement
			</Btn>
		}
		btnTopTwo={
			<Btn>
				Buy Coin
			</Btn>
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
							<H2>
								All Orders
							</H2>
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
								date: <Text>November, 2020</Text>,
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
								date: <Text>October, 2020</Text>,
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
							<H2>
								All Orders
							</H2>
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
								date: <Text >November, 2020</Text>,
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
							<H2>
								All Orders
							</H2>
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
								date: <Text >November, 2020</Text>,
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
			<Btn type='btn--flat'
				iconLeft={
					<Icon
						name='icon--refresh'
						icons={IconRefresh}
					/>
				}
			>
				Load More
			</Btn>
		}
	/>
);