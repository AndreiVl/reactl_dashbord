import React from 'react';
import './home.scss';

type HomeProps = {
	className?: string,
	title?: React.ReactNode,
	btn?: React.ReactNode,
	currencyCardItems?: React.ReactNode[],
	tradingview?: React.ReactNode,
	bottom?: React.ReactNode,
}

export const Home: React.FC<HomeProps> = ({
	className = '',
	title,
	btn,
	currencyCardItems = [],
	tradingview,
	bottom,
}) => {
	return (
		<div className={`home ${className || ''}`}>
			<div className="container container-fluid">
				<div className="row justify-content-between main__item">
					<div className="col-12 col-md-auto">
						<div className="main__mrh1">
							{title}
						</div>
					</div>
					<div className="col-12 col-md-auto">
						{btn}
					</div>
				</div>

				<div className="row main__item">
					{currencyCardItems.map((item, index) => (
						<div className="col-12 col-lg-4" key={index}>
							<div className='main__card-item'>
								{item}
							</div>
						</div>
					))}
				</div>

				<div className="row main__item">
					<div className="col-12">
						{tradingview}
					</div>
				</div>

				<div className='row'>
					<div className="col-12">
						<div className='main__table'>
							{bottom}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}