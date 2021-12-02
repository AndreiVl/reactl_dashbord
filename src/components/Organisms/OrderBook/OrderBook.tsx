import React from 'react';
import './order-book.scss';

type OrderBookProps = {
	className?: string,
	title?: React.ReactNode,
	lead?: React.ReactNode,
	btnTopOne?: React.ReactNode,
	btnTopTwo?: React.ReactNode,
	tabs?: React.ReactNode,
	more?: React.ReactNode,
}

export const OrderBook: React.FC<OrderBookProps> = ({
	className = '',
	title,
	lead,
	btnTopOne,
	btnTopTwo,
	tabs,
	more,
}) => {
	return (
		<div className={`order-book ${className || ''}`}>
			<div className="row justify-content-between main__item">
				<div className='col-12 col-md-auto main__mrh1'>
					<div className="order-book__mr-violet">
						{title}
					</div>

					{lead}
				</div>

				<div className="col-12 col-md-auto">
					<div className='order-book__btns'>
						{btnTopOne}
						{btnTopTwo}
					</div>

				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div className='order-book__tabs'>
						{tabs}
					</div>
				</div>
			</div>

			<div className='col-12 align-self-center'>
				<div className='order-book__more'>
					{more}
				</div>
			</div>
		</div>
	)
}