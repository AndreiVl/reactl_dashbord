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
	<Btn>
		Button
	</Btn>
);
export const BtnSubmit = () => (
	<Btn types={false}>
		Button
	</Btn>
);
export const BtnBlock = () => (
	<Btn type='btn--block'>
		Button
	</Btn>
);
export const BtnFlat = () => (
	<Btn type='btn--flat'>
		Button
	</Btn>
);
export const BtnOutline = () => (
	<Btn type='btn--outline'>
		Button
	</Btn>
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