import React from 'react';
import './chat-user.scss';
import { UerPik } from '../../Atoms/UerPik/UerPik'
import { Text } from '../../Atoms/Text/Text'
import { Notification } from '../../Atoms/Notification/Notification'
import UserPik from '../../../assets/images/user-pic__img-01.png'
import UserPik2x from '../../../assets/images/user-pic__img-01@2x.png'

type ChatUserProps = {
	UerPikImg?: string,
	UerPikImg2x?: string,
	UerPikImgAlt?: string,
	UerPikImgTitle?: string,
	userPikActive?: 'user-pic--big-activ' | 'user-pic--big-noactiv',
	userUrl?: string,
	title?: string,
	text?: string,
	date?: string,
	notificationType?: boolean,
	notification?: number
	className?: string
}

export const ChatUser: React.FC<ChatUserProps> = ({
	UerPikImg = UserPik,
	UerPikImg2x = UserPik2x,
	UerPikImgAlt = 'UserPik',
	UerPikImgTitle = 'UserPik',
	userPikActive = 'user-pic--big-activ',
	userUrl = '#',
	title = ' John Doe',
	text = 'Lorem ipsum dolor sit',
	date,
	notificationType = true,
	notification,
	className
}) => {
	return (
		<div className={`chat-user ${className || ""}`}>
			<div className="chat-user__img">
				<UerPik
					img={UerPikImg}
					img2x={UerPikImg2x}
					imgAlt={UerPikImgAlt}
					imgTitle={UerPikImgTitle}
					active={userPikActive}
					size={true}
				/>
			</div>

			<div className="chat-user__info">
				<div className="chat-user__left">
					<a href={userUrl} target="_blank" className='chat-user__title'>
						<Text
							fontWeight='text--bold'
						>
							{title}
						</Text>
					</a>
					<Text
						className='chat-user__text'
						size='text--sm'
					>
						{text}
					</Text>
				</div>

				<div className="chat-user__right">
					{date &&
						<Text
							className='chat-user__date'
							size='text--sm'
						>
							{date} PM
						</Text>
					}
					{notification &&
						<Notification
							className={`${notificationType ? 'notification--red' : ''}`}
							number={notification}
						/>
					}
				</div>
			</div>
		</div>
	)
}