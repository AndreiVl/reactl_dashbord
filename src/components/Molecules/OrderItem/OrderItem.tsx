import React from "react";
import './order-item.scss'
import { Icon } from '../../Atoms/Icon/Icon';
import { Text } from '../../Atoms/Text/Text';
import IconEthBlue from '../../../assets/Icons/icon--eth-blue.svg';

type OrderItemProps = {
	url?: string,
	icon?: string,
	iconName?: string,
	title?: string,
	crypto?: string,
	className?: string
}

export const OrderItem: React.FC<OrderItemProps> = ({
	url = '#',
	icon = IconEthBlue,
	iconName = 'icon--eth-blue',
	title = 'Buy Bitcoin',
	crypto = '0.5384 BTC',
	className
}) => {
	return (
		<a href={url} target="_blank" className={`order-item ${className || ''}`}>
			<div className="order-item__left">
				<Icon
					icons={icon}
					name={iconName}
					iconMod='icon--42'
				/>
			</div>
			<div className="order-item__right">
				<div className="order-item__top">
					<Text
						className='order-item__title'
						fontWeight='text--bold'
						color='text--black'
					>
						{title}
					</Text>
					<Text
						className='order-item__crypto'
						size='text--m'
						fontWeight='text--bold'
						color='text--black'
					>
						{crypto}
					</Text>
				</div>
				<div className="order-item__bottom">
					<Text
						className='order-item__date'
						size='text--sm'
					>
						{title}
					</Text>

					<Text
						className='order-item__currency'
						size='text--sm'
					>
						{title}
					</Text>
				</div>
			</div>
		</a>
	)
}