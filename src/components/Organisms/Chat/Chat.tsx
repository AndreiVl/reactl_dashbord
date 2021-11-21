import React from 'react';
import './chat.scss';

type ChatProps = {
	className?: string,
	chatUser?: React.ReactNode,
	chatUserTwo?: React.ReactNode,
	listChatMessage?: React.ReactNode[],
	listChatUsers?: React.ReactNode[],
	chatForm?: React.ReactNode,
}

export const Chat: React.FC<ChatProps> = ({
	className = '',
	chatUser,
	listChatUsers = [],
	chatUserTwo,
	listChatMessage = [],
	chatForm,
}) => {
	return (
		<div className={`chat ${className || ''}`}>
			<div className='container container-fluid'>
				<div className='row'>
					<div className='col-12 col-lg-4'>
						<div className='chat__left'>
							<div className="chat__profile">
								{chatUser}
							</div>

							<ul className="chat__user-list custom-scrollbar">
								{listChatUsers.map((item, index) => (
									<li className="chat__user-item" key={index}>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="col-12 col-lg-8 chat__mobile">
						<div className="chat__body">
							<div className="chat__current-user">
								{chatUserTwo}
							</div>

							<ul className="chat__msg-list custom-scrollbar">
								{listChatMessage.map((item, index) => (
									<li className="chat__msg-item" key={index}>
										{item}
									</li>
								))}
							</ul>

							<div className="chat__form">
								{chatForm}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}