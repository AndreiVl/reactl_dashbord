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
					<div className="wallet__mr-violet">
						{title}
					</div>

					{lead}
				</div>

				<div className="col-12 col-md-auto">
					<div className='order-book__btns'>
						<div className="order-book__mr17">
							{btnTopOne}
						</div>
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

// div.order-book
// 	div.row.justify-content-between.main__item
// 		div.col-12.col-md-auto.main__mrh1
// 			h1.wallet__mr-violet.h1 Your Orders
// 			p.text See full list of your orders of your account
// 		div.col-12.col-md-auto
// 			+btn({text: 'Get statement'})(class="btn--outline order-book__mr17")
// 			+btn({text: 'Buy Coin'})
// 	div.row
// 		div.col-12
// 			div.order-book__tabs
// 				+tabs([
// 					{url: '#tab-1', link: 'History'},
// 					{url: '#tab-2', link: 'Sells', notification: '10', class_notification: 'notification--red'},
// 					{url: '#tab-3', link: 'Scheduled', notification: '10'}
// 				])(class="main__item")
// 				div.order-book__tab(id='tab-1')
// 					div.order-book__top
// 						h2.h2.order-book__mb-blue All Orders
// 						div.order-book__top-control
// 							+checkbox({name: 'accept', text: 'Show Cancelled'})
// 							+btn({icon_l: 'icon--search'})(class="icon--block")

// 					p.text.text--semibold.order-book__mb-blue November, 2020

// 					ul.order-book__list-order.main__item
// 						li.order-book__list-order-item
// 							+order-item({icon: 'icon--eth-blue', title: 'Buy Ethereum', crypto: '0.5384 ETH', date: 'Nov 12, 2019 11:34 PM', currency: '3,980.93 USD'})
// 						li.order-book__list-order-item
// 							+order-item({icon: 'icon--btc-orange', title: 'Buy Bitcoin',crypto: '0.5384 BTC', date: 'Nov 12, 2019 11:34 PM', currency: '3,980.93 USD'})(class="order-item--active")

// 					p.text.text--semibold.order-book__mb-blue October, 2020

// 					ul.order-book__list-order.order-book__mb-blue
// 						li.order-book__list-order-item
// 							+order-item({icon: 'icon--btc-orange', title: 'Buy Bitcoin', crypto: '0.5384 BTC', date: 'Nov 12, 2019 11:34 PM', currency: '3,980.93 USD'})
// 						li.order-book__list-order-item
// 							+order-item({icon: 'icon--btc-orange', title: 'Buy Bitcoin', crypto: '0.5384 BTC', date: 'Nov 12, 2019 11:34 PM', currency: '3,980.93 USD'})(class="order-item--active")

// 					div.order-book__more
// 						+btn({icon_l: 'icon--refresh', text: 'Load More'})(class="btn--flat")
// 				div.order-book__tab(id='tab-2') 2
// 				div.order-book__tab(id='tab-3') 3