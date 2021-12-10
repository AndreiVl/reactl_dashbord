import React from "react";
import { Link } from "./Link";

export default {
	title: 'Components/Atoms/Link',
	component: Link,
};

export const LinkDefault = () => (
	<Link>
		Link
	</Link>
);
export const LinkBlack = () => (
	<Link
		mod='link--black'
	>
		Link
	</Link>
);
export const LinkTextdecor = () => (
	<Link
		mod='link--textdecor'
	>
		Link
	</Link>
);
export const LinkGray = () => (
	<Link
		mod='link--gray'
	>
		Link
	</Link>
);