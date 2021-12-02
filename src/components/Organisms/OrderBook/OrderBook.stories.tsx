import React from 'react';
import { OrderBook } from './OrderBook';
import { H1 } from '../../Atoms/H1/H1';
import { Text } from '../../Atoms/Text/Text';
import { Btn } from '../../Atoms/Btn/Btn';
import { Icon } from '../../Atoms/Icon/Icon';
import IconRefresh from '../../../assets/Icons/icon--refresh.svg';



export default {
	title: 'Components/Organisms/OrderBook',
	component: OrderBook,
};


export const OrderBookDefault = () => (
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
);