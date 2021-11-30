import React from 'react';
import './wallet.scss';
import { Btn } from '../../Atoms/Btn/Btn';


type WalletProps = {
	className?: string,
	title?: React.ReactNode,
	lead?: React.ReactNode,
	desc?: React.ReactNode,
	walletItems?: {
		title?: React.ReactNode,
		itemsWallet?: [],
	}[],
	itemsWallet?: React.ReactNode[],

}

export const Wallet: React.FC<WalletProps> = ({
	className = '',
	title,
	lead,
	walletItems = [],
	itemsWallet = [],
}) => {
	return (
		<div className={`wallet ${className || ''}`}>
			<div className="row justify-content-between main__item">
				<div className="col-12 col-md-auto main__mrh1">
					<div className='wallet__mr-violet'>
						{title}
						{lead}
					</div>
				</div>

				<div className="col-12 col-md-auto">
					<div className='wallet__btns'>
						<Btn buttonText='Send' />
						<Btn buttonText='Withdraw' />
					</div>
				</div>
			</div>

			{walletItems.map((item, index) => (
				<div className="row wallet__item" key={index}>
					<div className='col-12'>
						<div className='wallet__item-title'>
							{item.title}
						</div>
					</div>

					{itemsWallet.map((itemTwo, index) => (
						<div className="col-12 col-md-6 col-lg-4 wallet__item--yellow" key={index}>
							{itemTwo}
						</div>
					))}
				</div>
			))}
		</div>
	)
}