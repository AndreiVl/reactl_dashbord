import React from "react";
import './btn.scss';

type BtnProps = {
	buttonText?: string,
	type?: 'btn--block' | 'btn--outline' | 'btn--flat',
	icon?: boolean,
	iconMod?: 'btn--icon-gray' | 'btn--icon-darkgray',
	circle?: boolean,
	types?: boolean,
	circleBg?: boolean,
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
}

export const Btn: React.FC<BtnProps> = ({
	buttonText,
	types = true,
	type,
	iconMod,
	icon = false,
	circle = false,
	circleBg = false,
	iconLeft,
	iconRight,
}) => {
	return (
		<button
			type={types ? 'button' : 'submit'} className={`btn 
			${type || ''} 
			${icon ? 'btn--icon' : ''}
			${iconMod || ''}
			${circle ? 'btn--circle' : ''}
			${circleBg ? 'btn--circle--bg' : ''}
			`}
		>
			{iconLeft && iconLeft}

			{buttonText &&
				<span>
					{buttonText}
				</span>
			}

			{iconRight && iconRight}
		</button>
	)
}