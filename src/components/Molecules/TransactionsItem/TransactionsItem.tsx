import React from 'react';
import './transaction-item.scss';
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
	badge?: React.ReactNode,
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
				<div className='transactions-item__text'>
					<Text>
						{textOne}
						<img className='transactions-item__img' src={img} alt={imgAlt} />
						{textTwo}
					</Text>
				</div>

				<div className="transactions-item__info">
					<div className='transactions-item__date'>
						<Text>
							{date}
						</Text>
					</div>

					<div className='transactions-item__crypto'>
						<Text>
							{crypto}
						</Text>
					</div>
				</div>
			</div>

			{bottom &&
				<div className="transactions-item__bottom">
					<div className='transactions-item__conferm'>
						<Text>
							{conferm}
						</Text>
					</div>

					{badge}
				</div>
			}
		</div >
	)
}