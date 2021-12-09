import React from 'react';
import { PageLogin } from './PageLogin';
import { RegistrEntry } from '../../components/Organisms/RegistrEntry/RegistrEntry';
import { Logo } from '../../components/Atoms/Logo/Logo';
import { Form } from '../../components/Organisms/Form/Form';
import { Slider } from '../../components/Molecules/Slider/Slider';
import { Btn } from '../../components/Atoms/Btn/Btn';
import { Input } from '../../components/Atoms/Input/Input';
import { Checkbox } from '../../components/Atoms/Checkbox/Checkbox';
import { Text } from '../../components/Atoms/Text/Text';
import { Link } from '../../components/Atoms/Link/Link';
import ImgSlider from "../../assets/images/slider__img-01.png"

export default {
	title: 'Pages/PageLogin/Rigistr',
	component: PageLogin,
};


export const PageLoginRigistr = () => (
	<PageLogin
		content={
			<RegistrEntry
				logo={
					<Logo />
				}
				form={
					<Form
						title='Register'
						desc='Create New Dashlite Account'
						button={
							<Btn
								type='btn--block'
								buttonText='Register'
								types={false}
							/>
						}
						itemsForm={[
							{
								typeItem: 'form__item',
								itemForm:
									<Input
										labelText='Name'
										inputMod='border'
										placeholder='Enter your name'
										name='login'
										type='text'
									/>
							},
							{
								typeItem: 'form__item',
								itemForm:
									<Input
										labelText='Email or Username'
										inputMod='border'
										placeholder='Enter your email address or username'
										name='name_email'
										type='text'
									/>
							},
							{
								typeItem: 'form__item-big',
								itemForm:
									<Input
										labelText='Password'
										inputMod='border'
										placeholder='Enter your password'
										name='password_2'
										type='password'
									/>
							},
							{
								typeItem: 'form__item',
								checkbox:
									<Checkbox
										name='accept'
										value='accept'
										text={
											<Text>I agree to Dashlite <Link>Privacy Policy</Link> & <Link>Terms</Link></Text>
										}
									/>
							}
						]}
					/>
				}
				desc={
					<Text> Already have an account ? <Link href='#'> Sign in instead</Link></Text>
				}
				divider={
					<Text fontWeight='text--bold' size='text--esm'>OR</Text>
				}
				linksSocial={
					<Text ><Link className='registr-entry__fb'>Facebook</Link> <Link >Google</Link></Text>
				}
				bottomLinksItems={[
					<Text size='text--sm'><Link >Terms & Condition</Link></Text>,
					<Text size='text--sm'><Link >Privacy Policy</Link></Text>,
					<Text size='text--sm'><Link >Help</Link></Text>,
				]}
				copy={
					<Text color='text--black'>© 2019 DashLite. All Rights Reserved.</Text>
				}
				slider={
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
				}
			/>
		}
	/>
);