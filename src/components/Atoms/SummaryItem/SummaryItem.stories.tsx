import React from "react";
import { SummaryItem } from "./SummaryItem"
import IconChart from '../../../assets/Icons/icon--chart.svg';

export default {
	title: 'Components/Atoms/SummaryItem',
	component: SummaryItem,
};

export const SummaryItemDefault = () => (
	<SummaryItem />
);
export const SummaryItemIcon = () => (
	<SummaryItem
		className="summary-item--icon"
		icon={IconChart}
		iconName="icon--chart"
	/>
);