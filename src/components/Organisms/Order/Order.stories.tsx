import React from 'react';
import { Order } from './Order';
import { H2 } from '../../Atoms/H2/H2';
import { Checkbox } from '../../Atoms/Checkbox/Checkbox';
import { Btn } from '../../Atoms/Btn/Btn';
import { Text } from '../../Atoms/Text/Text';
import { Icon } from '../../Atoms/Icon/Icon';
import { OrderItem } from '../../Molecules/OrderItem/OrderItem';
import IconSearch from '../../../assets/Icons/icon--search.svg';
import IconBtcOrange from '../../../assets/Icons/icon--btc-orange.svg';

export default {
	title: 'Components/Organisms/Order',
	component: Order,
};


export const OrderDefault = () => (
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
				date:
					<Text>November, 2020</Text>,
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
				date:
					<Text>October, 2020</Text>,
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
	/>
);