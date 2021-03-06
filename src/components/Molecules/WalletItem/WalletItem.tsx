import React from 'react';
import './wallet-item.scss';
import { Text, TextSm } from '../../Atoms/Text/Text';
import { Link } from '../../Atoms/Link/Link';
import { Icon } from '../../Atoms/Icon/Icon';
import { Btn } from '../../Atoms/Btn/Btn';

type WalletItemProps = {
	href?: string,
	icons: string,
	name?: string,
	iconMod?: string,
	iconBtn: string,
	iconNameBtn?: string,
	title?: string,
	crypto?: string,
	currency?: string,
	itemsLink?: {
		href?: string,
		link?: string,
	}[],
	className?: string
}

export const WalletItem: React.FC<WalletItemProps> = ({
	href = "#",
	icons,
	name,
	iconMod,
	iconBtn,
	iconNameBtn,
	title,
	crypto,
	currency,
	itemsLink = [],
	className = '',
}) => {
	return (
		<div className={`wallet-item ${className || ''}`}>
			<div className="wallet-item__top">
				<a className='wallet-item__left' href={href} target="_blank">
					<Icon
						icons={icons}
						name={name}
						iconMod={iconMod}
					/>
					<span className='wallet-item__title h3'>{title}</span>
				</a>

				<Btn
					icon
					iconMod='btn--icon-gray'
					iconLeft={
						<Icon
							icons={iconBtn}
							name={iconNameBtn}
							iconMod='icon--18'
						/>
					}
				/>
			</div>

			<div className="wallet-item__body">
				<div className='wallet-item__crypto'>
					<Text >
						{crypto}
					</Text>
				</div>

				<div className='wallet-item__currency'>
					<Text>
						{currency}
					</Text>
				</div>

			</div>

			<div className="wallet-item__bottom">
				{itemsLink.map((item, index) => (
					<div className='wallet-item__link' key={index}>
						<TextSm >
							<Link mod='link--black' href={item.href}>
								{item.link}
							</Link>
						</TextSm>
					</div>
				))}
			</div>
		</div>
	)
}
