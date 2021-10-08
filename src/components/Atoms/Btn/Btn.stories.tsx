import React from "react";
import { Btn } from "./Btn";
import { Icon } from '../Icon/Icon';
import IconHamburger from '../../../assets/Icons/icon--hamburger.svg';
import IconPlain from '../../../assets/Icons/icon--plain.svg';

export default {
	title: 'Components/Atoms/Btn',
	component: Btn,
};

export const BtnDefault = () => (
	<Btn />
);
export const BtnSubmit = () => (
	<Btn
		types={false}
	/>
);
export const BtnBlock = () => (
	<Btn
		type='btn--block'
	/>
);
export const BtnFlat = () => (
	<Btn
		type='btn--flat'
	/>
);
export const BtnOutline = () => (
	<Btn
		type='btn--outline'
	/>
);
export const BtnIconBlock = () => (
	<Btn
		icon
		buttonText=''
		iconLeft={
			<Icon
				icons={IconHamburger}
				name="icon--hamburger"
			/>
		}
	/>
);
export const BtnIconCircle = () => (
	<Btn
		circle
		buttonText=''
		iconLeft={
			<Icon
				icons={IconPlain}
				name="icon--plain"
				color='#f5f5fa'
			/>
		}
	/>
);
export const BtnIconCircleBg = () => (
	<Btn
		circle
		circleBg
		buttonText=''
		iconLeft={
			<Icon
				icons={IconPlain}
				name="icon--plain"
			/>
		}
	/>
);