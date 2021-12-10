import React from 'react';
import './order.scss';

type OrderProps = {
	className?: string,
	title?: React.ReactNode,
	controlOne?: React.ReactNode,
	controlTwo?: React.ReactNode,
	orderItems?: {
		date?: React.ReactNode,
		orderItem?: React.ReactNode[],
	}[],
}

export const Order: React.FC<OrderProps> = ({
	className = '',
	title,
	controlOne,
	controlTwo,
	orderItems = [],
}) => {
	return (
		<div className={`order ${className || ''}`}>
			<div className='order__top'>
				{title}
				<div className='order-book__controls'>
					{controlOne}
					{controlTwo}
				</div>
			</div>

			{orderItems.map((item, index) => (
				<div className='order__month'>
					<div className='order__mb-blue'>
						<div className='order__date'>
							{item.date}
						</div>
					</div>

					<OrderItemList orderItemList={item.orderItem} />
				</div>
			))}
		</div>
	)
}

type OrderItemListProps = {
	orderItemList?: React.ReactNode[]
}

const OrderItemList: React.FC<OrderItemListProps> = ({
	orderItemList = [],
}) => {
	return (
		<ul className='order__list'>
			{orderItemList.map((item, index) => (
				<li className="order__item" key={index}>
					{item}
				</li>
			))}
		</ul>
	)
}