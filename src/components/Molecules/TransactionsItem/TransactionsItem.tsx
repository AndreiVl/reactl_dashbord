import React from 'react';
import './transaction-item.scss';
import { Badge, BadgeProps } from '../../Atoms/Badge/Badge';
import { Text } from '../../Atoms/Text/Text';


type TransactionsItemProps = {
	className?: string
	textOne?: string,
	textTwo?: string,
	img?: string,
	imgAlt?: string,
	date?: string,
	crypto?: string,
	conferm?: string,
	badge?: BadgeProps,
	bottom?: boolean,
}

export const TransactionsItem: React.FC<TransactionsItemProps> = ({
	className = '',
	textOne = '',
	textTwo,
	img,
	imgAlt,
	date,
	crypto,
	conferm,
	badge,
	bottom = false,
}) => {
	return (
		<div className={`transactions-item ${className || ''}`}>
			<div className="transactions-item__top">
				<Text className='transactions-item__text'>
					{textOne}
					<img className='transactions-item__img' src={img} alt={imgAlt} />
					{textTwo}
				</Text>
				<div className="transactions-item__info">
					<Text className='transactions-item__date'>
						{date}
					</Text>

					<Text className='transactions-item__crypto' color='text--black' fontWeight='text--semibold'>
						{crypto}
					</Text>
				</div>
			</div>

			{bottom &&
				<div className="transactions-item__bottom">
					<Text fontWeight='text--semibold' color='text--black'>
						{conferm}
					</Text>
					{badge &&
						<Badge {...badge} />
					}
				</div>
			}
		</div >
	)
}