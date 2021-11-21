import React from 'react';
import { Chat } from './Chat';
import { ChatUser } from '../../Molecules/ChatUser/ChatUser';
import { ChatMessage } from "../../Molecules/ChatMessage/ChatMessage";
import { ChatForm } from "../../Molecules/ChatForm/ChatForm";
import ImgChat1 from '../../../assets/images/chat__img-01.png';
import ImgChat2x from '../../../assets/images/chat__img-01@2x.png';
import ImgChat2 from '../../../assets/images/chat__img-02.png';
import ImgChat22x from '../../../assets/images/chat__img-02@2x.png';
import ImgChat3 from '../../../assets/images/chat__img-03.png';
import ImgChat32x from '../../../assets/images/chat__img-03@2x.png';
import ImgChat4 from '../../../assets/images/chat__img-04.png';
import ImgChat42x from '../../../assets/images/chat__img-04@2x.png';
import ImgChat5 from '../../../assets/images/chat__img-05.png';
import ImgChat52x from '../../../assets/images/chat__img-05@2x.png';
import ImgChat6 from '../../../assets/images/chat__img-06.png';
import ImgChat62x from '../../../assets/images/chat__img-06@2x.png';
import ImgChat7 from '../../../assets/images/chat__img-07.png';
import ImgChat72x from '../../../assets/images/chat__img-07@2x.png';
import ImgChat8 from '../../../assets/images/chat__img-08.png';
import ImgChat82x from '../../../assets/images/chat__img-08@2x.png';
import ImgChat9 from '../../../assets/images/chat__img-09.png';
import ImgChat92x from '../../../assets/images/chat__img-09@2x.png';
import ImgChat10 from '../../../assets/images/chat__img-10.png';
import ImgChat102x from '../../../assets/images/chat__img-10@2x.png';
import ImgChat11 from '../../../assets/images/chat__img-11.png';
import ImgChat112x from '../../../assets/images/chat__img-11@2x.png';
import ImgChat12 from '../../../assets/images/chat__img-12.png';
import ImgChat12x from '../../../assets/images/chat__img-12@2x.png';
import ImgChat13 from '../../../assets/images/chat__img-13.png';
import ImgChat13x from '../../../assets/images/chat__img-13@2x.png';


export default {
	title: 'Components/Organisms/Chat',
	component: Chat,
};


export const ChatDefault = () => (
	<Chat
		chatUser={
			<ChatUser
				UerPikImg={ImgChat1}
				UerPikImg2x={ImgChat2x}
				UerPikImgAlt='Jane Cooper'
				UerPikImgTitle='Jane Cooper'
				title='Jane Cooper'
				text='Lorem ipsum dolor sit'
			/>
		}
		chatUserTwo={
			<ChatUser
				UerPikImg={ImgChat2}
				UerPikImg2x={ImgChat22x}
				UerPikImgAlt='Wade Warren'
				UerPikImgTitle='Wade Warren'
				title='Wade Warren'
				text='Lorem ipsum dolor sit'
			/>
		}
		listChatUsers={[
			<ChatUser
				UerPikImg={ImgChat2}
				UerPikImg2x={ImgChat22x}
				UerPikImgAlt='Wade Warren'
				UerPikImgTitle='Wade Warren'
				title='Wade Warren'
				text='Lorem ipsum dolor sit'
				date='4:32'
				notification={10}
			/>,
			<ChatUser
				UerPikImg={ImgChat3}
				UerPikImg2x={ImgChat32x}
				UerPikImgAlt='Esther Howard'
				UerPikImgTitle='Esther Howard'
				title='Esther Howard'
				text='Lorem ipsum dolor sit'
				date='4:32'
				notification={10}
				notificationType
			/>,
			<ChatUser
				UerPikImg={ImgChat4}
				UerPikImg2x={ImgChat42x}
				UerPikImgAlt='Guy Hawkins'
				UerPikImgTitle='Guy Hawkins'
				title='Guy Hawkins'
				text='Lorem ipsum dolor sit'
				date='4:32'
				notification={10}
			/>,
			<ChatUser
				UerPikImg={ImgChat5}
				UerPikImg2x={ImgChat52x}
				UerPikImgAlt='Cameron Williamson'
				UerPikImgTitle='Cameron Williamson'
				title='Cameron Williamson'
				text='Lorem ipsum dolor sit'
				date='4:32'
				notification={10}
			/>,
			<ChatUser
				UerPikImg={ImgChat6}
				UerPikImg2x={ImgChat62x}
				UerPikImgAlt='Jacob Jones'
				UerPikImgTitle='Jacob Jones'
				title='Jacob Jones'
				text='Lorem ipsum dolor sit'
				date='4:32'
				notificationType={false}
				notification={10}
			/>,
			<ChatUser
				UerPikImg={ImgChat7}
				UerPikImg2x={ImgChat72x}
				UerPikImgAlt='Cody Fisher'
				UerPikImgTitle='Cody Fisher'
				title='Cody Fisher'
				text='Lorem ipsum dolor sit'
				date='4:32'
				notificationType={false}
				notification={10}
			/>,
			<ChatUser
				UerPikImg={ImgChat8}
				UerPikImg2x={ImgChat82x}
				UerPikImgAlt='Kristin Watson'
				UerPikImgTitle='Kristin Watson'
				title='Kristin Watson'
				text='Lorem ipsum dolor sit'
				date='4:32'
				notificationType={false}
				notification={10}
			/>,
			<ChatUser
				UerPikImg={ImgChat9}
				UerPikImg2x={ImgChat92x}
				UerPikImgAlt='Albert Flores'
				UerPikImgTitle='Albert Flores'
				title='Albert Flores'
				text='Lorem ipsum dolor sit'
				date='4:32'
				notificationType={false}
				notification={10}
			/>,
			<ChatUser
				UerPikImg={ImgChat10}
				UerPikImg2x={ImgChat102x}
				UerPikImgAlt='Ronald Richards'
				UerPikImgTitle='Ronald Richards'
				title='Ronald Richards'
				text='Lorem ipsum dolor sit'
				date='4:32'
				notification={10}
			/>,
			<ChatUser
				UerPikImg={ImgChat11}
				UerPikImg2x={ImgChat112x}
				UerPikImgAlt='Floyd Miles'
				UerPikImgTitle='Floyd Miles'
				title='Floyd Miles'
				text='Lorem ipsum dolor sit'
				date='4:32'
				notification={10}
			/>,
			<ChatUser
				UerPikImg={ImgChat12}
				UerPikImg2x={ImgChat12x}
				UerPikImgAlt='Jerome Bell'
				UerPikImgTitle='Jerome Bell'
				title='Jerome Bell'
				text='Lorem ipsum dolor sit'
				date='4:32'
				notificationType={false}
				notification={10}
			/>,
			<ChatUser
				UerPikImg={ImgChat13}
				UerPikImg2x={ImgChat13x}
				UerPikImgAlt='Annette Black'
				UerPikImgTitle='Annette Black'
				title='Annette Black'
				text='Lorem ipsum dolor sit'
				date='4:32'
				notification={10}
			/>,

		]}
		listChatMessage={[
			<ChatMessage
				user={{
					img: ImgChat2,
					img2x: ImgChat22x,
					imgAlt: 'Wade Warren',
					imgTitle: 'Wade Warren',
				}}
			/>,
			<ChatMessage
				user={{
					img: ImgChat1,
					img2x: ImgChat2x,
					imgAlt: 'Jane Cooper',
					imgTitle: 'Jane Cooper',
				}}
				messageGreen
				message='Lorem ipsum dolor sit amet, elit ut aliquam, purus venenatis.'
			/>,
			<ChatMessage
				user={{
					img: ImgChat2,
					img2x: ImgChat22x,
					imgAlt: 'Wade Warren',
					imgTitle: 'Wade Warren',
				}}
			/>,
			<ChatMessage
				user={{
					img: ImgChat1,
					img2x: ImgChat2x,
					imgAlt: 'Jane Cooper',
					imgTitle: 'Jane Cooper',
				}}
				messageGreen
				message='Lorem ipsum dolor sit amet, elit ut aliquam, purus venenatis.'
			/>,
			<ChatMessage
				user={{
					img: ImgChat2,
					img2x: ImgChat22x,
					imgAlt: 'Wade Warren',
					imgTitle: 'Wade Warren',
				}}
			/>,
			<ChatMessage
				user={{
					img: ImgChat1,
					img2x: ImgChat2x,
					imgAlt: 'Jane Cooper',
					imgTitle: 'Jane Cooper',
				}}
				messageGreen
				message='Lorem ipsum dolor sit amet, elit ut aliquam, purus venenatis.'
			/>,
			<ChatMessage
				user={{
					img: ImgChat2,
					img2x: ImgChat22x,
					imgAlt: 'Wade Warren',
					imgTitle: 'Wade Warren',
				}}
			/>,
			<ChatMessage
				user={{
					img: ImgChat1,
					img2x: ImgChat2x,
					imgAlt: 'Jane Cooper',
					imgTitle: 'Jane Cooper',
				}}
				messageGreen
				message='Lorem ipsum dolor sit amet, elit ut aliquam, purus venenatis.'
			/>,
			<ChatMessage
				user={{
					img: ImgChat2,
					img2x: ImgChat22x,
					imgAlt: 'Wade Warren',
					imgTitle: 'Wade Warren',
				}}
			/>,
			<ChatMessage
				user={{
					img: ImgChat1,
					img2x: ImgChat2x,
					imgAlt: 'Jane Cooper',
					imgTitle: 'Jane Cooper',
				}}
				messageGreen
				message='Lorem ipsum dolor sit amet, elit ut aliquam, purus venenatis.'
			/>,
			<ChatMessage
				user={{
					img: ImgChat2,
					img2x: ImgChat22x,
					imgAlt: 'Wade Warren',
					imgTitle: 'Wade Warren',
				}}
			/>,
			<ChatMessage
				user={{
					img: ImgChat1,
					img2x: ImgChat2x,
					imgAlt: 'Jane Cooper',
					imgTitle: 'Jane Cooper',
				}}
				messageGreen
				message='Lorem ipsum dolor sit amet, elit ut aliquam, purus venenatis.'
			/>,
		]}
		chatForm={
			<ChatForm />
		}
	/>
);