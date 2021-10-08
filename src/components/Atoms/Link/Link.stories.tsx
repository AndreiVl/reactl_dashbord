import React from "react";
import { Link } from "./Link";

export default {
	title: 'Components/Atoms/Link',
	component: Link,
};

export const LinkDefault = () => (
	<Link />
);
export const LinkBlack = () => (
	<Link
		mod='link--black'
	/>
);
export const LinkTextdecor = () => (
	<Link
		mod='link--textdecor'
	/>
);
export const LinkGray = () => (
	<Link
		mod='link--gray'
	/>
);