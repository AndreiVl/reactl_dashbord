import React from 'react';
import { RegistrEntry } from './RegistrEntry';
import { Logo } from '../../Atoms/Logo/Logo';
import { Form } from '../../Organisms/Form/Form';
import { Slider } from '../../Molecules/Slider/Slider';
import { Btn } from '../../Atoms/Btn/Btn';
import { Input } from '../../Atoms/Input/Input';
import { Checkbox } from '../../Atoms/Checkbox/Checkbox';
import { Text, TextEsm } from '../../Atoms/Text/Text';
import { Link } from '../../Atoms/Link/Link';
import ImgSlider from "../../../assets/images/slider__img-01.png"

export default {
	title: 'Components/Organisms/RegistrEntry',
	component: RegistrEntry,
};


export const RegistrEntryDefault = () => (
	<RegistrEntry
		logo={
			<Logo />
		}
		form={
			<Form
				title='Register'
				desc='Create New Dashlite Account'
				button={
					<Btn type='btn--block' types={false}>
						Register
					</Btn>
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
			<TextEsm>OR</TextEsm>
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
			<Text>© 2019 DashLite. All Rights Reserved.</Text>
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
);

export const RegistrEntrySigin = () => (
	<RegistrEntry
		logo={
			<Logo />
		}
		form={
			<Form
				title='Sign-In'
				desc='Access the DashLite panel using your email and passcode.'
				button={
					<Btn type='btn--block' types={false}>
						Sign-In
					</Btn>
				}
				itemsForm={[
					{
						typeItem: 'form__item',
						itemForm:
							<Input
								labelText='Email or Username'
								inputMod='border'
								placeholder='Enter your email address or username'
								name='name_email_2'
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
			<Text>New on our platform? <Link href='#'>Create an account</Link></Text>
		}
		divider={
			<TextEsm>OR</TextEsm>
		}
		qvestion={
			<Text >I don't have an account? <Link>Create an account</Link></Text>
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
			<Text>© 2019 DashLite. All Rights Reserved.</Text>
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
);