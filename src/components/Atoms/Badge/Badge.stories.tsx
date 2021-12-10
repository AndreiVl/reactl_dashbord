import React from "react";
import { Badge } from "./Badge";

export default {
	title: 'Components/Atoms/Badge',
	component: Badge
}

export const BadgeDefault = () => (
	<Badge>
		Badge
	</Badge>
);
export const BadgeGreen = () => (
	<Badge color='badge--green'>
		Badge
	</Badge>
);
export const BadgeBig = () => (
	<Badge size='badge--big'>
		Badge
	</Badge>
);
export const BadgeBorder = () => (
	<Badge size='badge--big' visual='badge--border'>
		Badge
	</Badge>
);