import React from "react";
import { OrderItem } from "./OrderItem";

export default {
	title: 'Components/Molecules/OrderItem',
	component: OrderItem,
};

export const OrderItemDefault = () => (
	<OrderItem
		title='Buy Ethereum'
		crypto='0.5384 ETH'
		date='Nov 12, 2019 11:34 PM'
		currency='3,980.93 USD'
	/>
);