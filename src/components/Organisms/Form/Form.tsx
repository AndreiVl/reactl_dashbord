import React from 'react';
import './form.scss';
import { H3 } from '../../Atoms/H3/H3';
import { Text } from '../../Atoms/Text/Text';

type FormProps = {
	formType?: formType,
	title?: string,
	desc?: string,
	button?: React.ReactNode,
	itemsForm?: {
		itemForm?: React.ReactNode,
		typeItem?: 'form__item' | 'form__item-big'
		checkbox?: React.ReactNode,
	}[]
}

type formType = 'registr' | 'sigin';

export const Form: React.FC<FormProps> = ({
	formType,
	title,
	desc,
	button,
	itemsForm = [],
	...props
}) => {
	return (
		<form className={`form ${formType ? `form--${formType}` : ''}`} {...props} method='Post'>
			<div className='form__item'>
				<H3 text={title} />
				<Text>
					{desc}
				</Text>
			</div>

			{itemsForm.map((item, index) => (
				<div className={`${item.typeItem}`} key={index}>
					{item.itemForm}

					{item.checkbox &&
						<div className='form__checkbox'>
							{item.checkbox}
						</div>
					}
				</div>
			))}

			<div className='form__item-big'>
				{button}
			</div>
		</form>
	)
}