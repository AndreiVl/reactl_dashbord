import React from "react";
import './order-item.scss'
import { Icon } from '../../Atoms/Icon/Icon';
import { Text, TextM, TextSm } from '../../Atoms/Text/Text';
import IconEthBlue from '../../../assets/Icons/icon--eth-blue.svg';

type OrderItemProps = {
	url?: string,
	icon?: string,
	iconName?: string,
	title?: string,
	crypto?: string,
	date?: string,
	currency?: string,
	className?: string
}

export const OrderItem: React.FC<OrderItemProps> = ({
	url = '#',
	icon = IconEthBlue,
	iconName = 'icon--eth-blue',
	title = 'Buy Bitcoin',
	crypto = '0.5384 BTC',
	date,
	currency,
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
					<div className="order-item__title">
						<Text>
							{title}
						</Text>
					</div>

					<div className="order-item__crypto">
						<TextM>
							{crypto}
						</TextM>
					</div>
				</div>
				<div className="order-item__bottom">
					<div className="order-item__date">
						<TextSm>
							{date}
						</TextSm>
					</div>

					<div className="order-item__currency">
						<TextSm>
							{currency}
						</TextSm>
					</div>
				</div>
			</div>
		</a>
	)
}