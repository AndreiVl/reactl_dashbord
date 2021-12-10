import React from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/pagination';
import './slider.scss';

import { H1 } from '../../Atoms/H1/H1';
import { Text } from '../../Atoms/Text/Text';

// type SliderItemRegProps = {
// 	img?: string,
// 	imgAlt?: string,
// 	title?: string,
// 	text?: string
// 	className?: string
// }

// export const SliderItemReg: React.FC<SliderItemRegProps> = ({
// 	img,
// 	imgAlt,
// 	title,
// 	text,
// 	className,
// }) => {
// 	return (
// 		<div className={`slider-item ${className || ''}`}>
// 			<div className="slider-item__body">
// 				<div className="slider-item__img">
// 					<img src={img} alt={imgAlt} />
// 				</div>
// 				<H1 className='slider-item__title' text={title} />
// 				<Text className='slider-item__text' color='text--black'>
// 					{text}
// 				</Text>
// 			</div>
// 		</div>
// 	)
// }

type SliderProps = {
	type?: 'slider--registr',
	items: {
		img?: string,
		imgAlt?: string,
		title?: string,
		text?: string
	}[]
	className?: string
}

export const Slider: React.FC<SliderProps> = ({
	type,
	items = [],
	className,
}) => {
	return (
		<Swiper className={`slider ${className || ''} ${type || ''}`}
			modules={[Pagination]}
			spaceBetween={0}
			slidesPerView={1}
			pagination={{
				clickable: true,
				modifierClass: 'slider__dots-',
				type: 'bullets',
				bulletElement: 'span',
				bulletClass: 'slider__dot',
				bulletActiveClass: 'slider__dot-active',
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + '</span>';
				}
			}}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{items.map((item, index) => (
				<SwiperSlide key={index}>
					<div className="slider__item" key={index}>
						<div className="slider__body">
							<div className="slider__img">
								<img src={item.img} alt={item.imgAlt} />
							</div>

							<div className="slider__title">
								<H1 className='slider__title'>
									{item.title}
								</H1>
							</div>

							<div className="slider__text">
								<Text>
									{item.text}
								</Text>
							</div>

						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

// const items = [
// 	<img src="" />,
// 	<img src="" />,
// 	<img src="" />,
// 	<img src="" />,
// 	<img src="" />,
// ];
// const settings = {
// 	modules: {
// 		title: 5
// 	},
// 	spaceBetween: 0,
// };

// <Swiper
//   modules={{title: 5}}
//   spaceBetween={0}
// ></Swiper>

// <Swiper
//   {...settings}
// >
//   {items.map((item) => (
//     <SwiperSlide>
//       {item}
//     </SwiperSlide>
//   ))}
// </Swiper>
// );


// const items2 = [...];
// const settings2 = { ...};

// <Swiper
// 	{...settings2}
// >
// 	{items2.map((item) => (
// 		<SwiperSlide>
// 			{item}
// 		</SwiperSlide>
// 	))}
// </Swiper>
// );