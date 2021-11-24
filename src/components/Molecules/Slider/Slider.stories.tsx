import React from "react";
import { Slider } from "./Slider";
import ImgSlider from "../../../assets/images/slider__img-01.png"

export default {
	title: 'Components/Molecules/SliderItemReg',
	component: Slider,
};

export const SliderDefault = () => (
	<Slider
		className='slider-item-reg'
		items={[
			{
				img: ImgSlider,
				imgAlt: 'Dasboard',
				title: 'Dashlight 1',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus purus a, mauris quisque habitasse',
			},
			{
				img: ImgSlider,
				imgAlt: 'Dasboard',
				title: 'Dashlight 2',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus purus a, mauris quisque habitasse',
			},
			{
				img: ImgSlider,
				imgAlt: 'Dasboard',
				title: 'Dashlight 3',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus purus a, mauris quisque habitasse',
			}
		]}
	/>
);