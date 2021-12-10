import React from "react";
import './chat-form.scss';
import { Btn } from '../../Atoms/Btn/Btn';
import { Icon } from '../../Atoms/Icon/Icon';
import { InputBorderRadius } from '../InputBorderRadius/InputBorderRadius'
import IconClip from '../../../assets/Icons/icon--clip.svg';
import IconPlain from '../../../assets/Icons/icon--plain.svg';

type ChatFormProps = {
	className?: string
}

export const ChatForm: React.FC<ChatFormProps> = ({
	className
}) => {
	return (
		<form method="post" name="chat-form" className={`chat-form ${className || ''}`}>
			<Btn
				circle
				iconLeft={
					<Icon
						icons={IconClip}
						iconMod="icon--18"
						name="icon--clip"
					/>
				}
			/>

			<InputBorderRadius
				name='serch-massage'
				type='text'
			/>
			<Btn
				circle
				circleBg
				types={false}
				iconLeft={
					<Icon
						icons={IconPlain}
						name="icon--plain"
					/>
				}
			/>
		</form>
	)
}