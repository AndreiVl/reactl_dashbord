import React from "react";
import { Text } from "./Text";

export default {
	title: 'Components/Atoms/Text',
	component: Text,
};

export const TextDefault = () => (
	<Text>
		Text
	</Text>
);
export const TextBold = () => (
	<Text fontWeight="text--bold">
		Text bold
	</Text>
);
export const TextSemibold = () => (
	<Text fontWeight='text--semibold'>
		Text semibold
	</Text>
);
export const TextBlack = () => (
	<Text color='text--black'>
		Text black
	</Text>
);
export const TextEsm = () => (
	<Text size='text--esm'>
		Text esm
	</Text>
);
export const TextSm = () => (
	<Text size='text--sm'>
		Text Sm
	</Text>
);
export const TextUper = () => (
	<Text uppercase>
		Text uper
	</Text>
);
export const TextBoldUper = () => (
	<Text uppercase
		fontWeight="text--bold"
	>
		Text uppercase
	</Text>
);