import React from 'react';
import { RegistrEntry } from '../components/Organisms/RegistrEntry/RegistrEntry';
import { Logo } from '../components/Atoms/Logo/Logo';
import { Form } from '../components/Organisms/Form/Form';
import { Slider } from '../components/Molecules/Slider/Slider';
import { Btn } from '../components/Atoms/Btn/Btn';
import { Input } from '../components/Atoms/Input/Input';
import { Checkbox } from '../components/Atoms/Checkbox/Checkbox';
import { Text, TextEsm } from '../components/Atoms/Text/Text';
import { Link } from '../components/Atoms/Link/Link';
import ImgSlider from "../assets/images/slider__img-01.png"

type PageSiginProps = {
}

export const PageSigin: React.FC<PageSiginProps> = ({

}) => {
	return (
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
	)
}