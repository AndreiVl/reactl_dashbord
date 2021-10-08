import React from "react";
import { UerPik } from "./UerPik";

export default {
	title: 'Components/Atoms/UerPik',
	component: UerPik,
};

export const UerPikDefault = () => (
	<UerPik />
);
export const UerPikBig = () => (
	<UerPik
		size={true}
	/>
);
export const UerPikActive = () => (
	<UerPik
		size={true}
		active="user-pic--big-activ"
	/>
);
export const UerPikNoActive = () => (
	<UerPik
		size={true}
		active="user-pic--big-noactiv"
	/>
);