import React from "react";
import './currency-card.scss'
import { H4 } from '../../Atoms/H4/H4'
import { Icon } from '../../Atoms/Icon/Icon'
import { Text } from '../../Atoms/Text/Text'
import { BigText } from '../../Atoms/BigText/BigText'

type СurrencyСardProps = {
	cardUrl?: string,
	name?: string,
	icon: string,
	iconName: string,
	total?: string,
	course?: string,
	className?: string
}

export const СurrencyСard: React.FC<СurrencyСardProps> = ({
	cardUrl = '#',
	name = 'Name',
	icon,
	iconName,
	total = 'tolal',
	course = 'course',
	className
}) => {
	return (
		<a className={`currency-card ${className || ""}`} href={cardUrl} target="_blank">
			<div className='currency-card__top'>
				<div className='currency-card__name-currency'>
					<H4
						text={name}
					/>
				</div>
				<Icon
					icons={icon}
					name={iconName}
					iconMod='icon--18'
				/>
			</div>
			<div className="currency-card__total">
				<BigText
					text={total}
				/>
			</div>
			<div className="currency-card__course">
				<Text
					size='text--sm'
				>
					{course}
				</Text>
			</div>
		</a>
	)
}