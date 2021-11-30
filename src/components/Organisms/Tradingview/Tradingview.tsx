import React from 'react';
import './tradingview.scss';
import TradingviewImg from '../../../assets/images/tradingview__img-01.jpg'

type TradingviewProps = {
	className?: string
}

export const Tradingview: React.FC<TradingviewProps> = ({
	className = '',

}) => {
	return (
		<div className={`tradingview ${className || ''}`}>
			<img className='tradingview__img' src={TradingviewImg} alt="График" />
		</div>
	)
}