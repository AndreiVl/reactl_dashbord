import React from 'react';
import { Form } from './Form';
import { Btn } from '../../Atoms/Btn/Btn';
import { Input } from '../../Atoms/Input/Input';
import { Checkbox } from '../../Atoms/Checkbox/Checkbox';
import { Text } from '../../Atoms/Text/Text';
import { Link } from '../../Atoms/Link/Link';

export default {
	title: 'Components/Organisms/Form',
	component: Form,
};

export const FormSigin = () => (
	<Form
		title='Sign-In'
		desc='Access the DashLite panel using your email and passcode.'
		button={
			<Btn
				type='btn--block'
				buttonText='Sign-In'
				types={false}
			/>
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
);

export const FormRegistr = () => (
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
);