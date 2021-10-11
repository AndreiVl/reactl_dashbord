import React from "react";
import { SliderItemReg } from "./Slider";
import ImgSlider from "../../../assets/images/slider__img-01.png"

export default {
	title: 'Components/Molecules/SliderItemReg',
	component: SliderItemReg,
};

export const SliderDefault = () => (
	<SliderItemReg
		className='slider-item-reg'
		img={ImgSlider}
		imgAlt='Dasboard'
		title='Dashlight 1'
		text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus purus a, mauris quisque habitasse'
	/>
);