import React from 'react';
import './transactions.scss';

type TransactionsProps = {
	className?: string,
	title?: React.ReactNode,
	lefTitle?: React.ReactNode,
	rightTitle?: React.ReactNode,
	subTitle?: React.ReactNode,
	summaryItemsLeft?: React.ReactNode[],
	summaryItemsRight?: React.ReactNode[],
	transactionsItems?: React.ReactNode[],
}

export const Transactions: React.FC<TransactionsProps> = ({
	className = '',
	title,
	lefTitle,
	rightTitle,
	subTitle,
	summaryItemsLeft = [],
	summaryItemsRight = [],
	transactionsItems = [],
}) => {
	return (
		<div className={`transactions ${className || ''}`}>
			<div className="row justify-content-between main__item">
				<div className="col-12 col-md-auto">
					{title}
				</div>
			</div>

			<div className="row main__item">
				<div className='col-12 col-xll-8 transactions__item--green'>
					<div className='transactions__mrb-green'>
						{lefTitle}
					</div>

					{summaryItemsLeft.map((item, index) => (
						<div className="transactions__summary-items" key={index}>
							{item}
						</div>
					))}
				</div>

				<div className='col-12 col-xll-4 transactions__item--green'>
					<div className='transactions__mrb-green'>
						{rightTitle}
					</div>

					{summaryItemsRight.map((item, index) => (
						<div className="transactions__summary-items" key={index}>
							{item}
						</div>
					))}
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div className="transactions__mrb-green">
						{subTitle}
					</div>

					<ul className="transactions__list">
						{transactionsItems.map((item, index) => (
							<li className="transactions__item" key={index}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}