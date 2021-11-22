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
	<Btn buttonText='Button' />
);
export const BtnSubmit = () => (
	<Btn buttonText='Button'
		types={false}
	/>
);
export const BtnBlock = () => (
	<Btn buttonText='Button'
		type='btn--block'
	/>
);
export const BtnFlat = () => (
	<Btn buttonText='Button'
		type='btn--flat'
	/>
);
export const BtnOutline = () => (
	<Btn buttonText='Button'
		type='btn--outline'
	/>
);
export const BtnIconBlock = () => (
	<Btn
		icon
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
		iconLeft={
			<Icon
				icons={IconPlain}
				name="icon--plain"
			/>
		}
	/>
);