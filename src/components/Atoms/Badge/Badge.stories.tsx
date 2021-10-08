import React from "react";
import { Badge } from "./Badge";

export default {
	title: 'Components/Atoms/Badge',
	component: Badge
}

export const BadgeDefault = () => (
	<Badge />
);
export const BadgeGreen = () => (
	<Badge
		color='badge--green'
	/>
);
export const BadgeBig = () => (
	<Badge
		size='badge--big'
	/>
);
export const BadgeBorder = () => (
	<Badge
		size='badge--big'
		visual='badge--border'
	/>
);