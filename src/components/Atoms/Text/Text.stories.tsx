import React from "react";
import { Text, TextEsm, TextSm, TextM } from "./Text";

export default {
	title: 'Components/Atoms/Text',
	component: Text,
};

export const TextDefault = () => (
	<Text>
		Text
	</Text>
);

export const TextEsmDefault = () => (
	<TextEsm>
		Text
	</TextEsm>
);

export const TextSmDefault = () => (
	<TextSm>
		Text
	</TextSm>
);

export const TextMDefault = () => (
	<TextM>
		Text
	</TextM>
);