import React from "react";
import { ReferralItem } from "./ReferralItem";
import UserImgTwo from '../../../assets/images/referral__img-02.png';
import UserImgTwo2x from '../../../assets/images/referral__img-02@2x.png';

export default {
	title: 'Components/Molecules/ReferralItem',
	component: ReferralItem,
};

export const ReferralItemDefault = () => (
	<ReferralItem />
);
export const ReferralItemGreen = () => (
	<ReferralItem
		badgeColor='badge--green'
		imgUser={UserImgTwo}
		imgUser2x={UserImgTwo2x}
		name='Happy Hona'
	/>
);