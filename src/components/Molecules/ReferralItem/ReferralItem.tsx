import React from "react";
import './referral-item.scss';
import { Badge } from '../../Atoms/Badge/Badge';
import { UerPik } from '../../Atoms/UerPik/UerPik';
import { Text } from '../../Atoms/Text/Text';
import { Btn } from '../../Atoms/Btn/Btn';
import { Link } from '../../Atoms/Link/Link';
import { Icon } from '../../Atoms/Icon/Icon';
import IconMore from '../../../assets/Icons/icon--more.svg';
import UserImg from '../../../assets/images/referral__img-01.png';
import UserImg2x from '../../../assets/images/referral__img-01@2x.png';

type ReferralItemProps = {
	badgeColor?: 'badge--green' | 'badge--red',
	imgUser?: string,
	imgUser2x?: string,
	name?: string,
	mailto?: string,
	email?: string,
	badgeText?: string,
	className?: string
}

export const ReferralItem: React.FC<ReferralItemProps> = ({
	badgeColor,
	imgUser = UserImg,
	imgUser2x = UserImg2x,
	name = 'Happy Rana',
	mailto,
	badgeText = 'Pending',
	email = 'Ramonrid@wanprotonmail.com',
	className,
}) => {
	return (
		<div className={`referral-item ${className || ''}`}>
			<div className="referral__status">
				<Badge
					text={badgeText}
					color={`${badgeColor ? 'badge--green' : 'badge--red'}`}
				/>
			</div>

			<div className="referral__user">
				<div className="referral__user-pik">
					<UerPik
						img={imgUser}
						img2x={imgUser2x}
						imgAlt={name}
						imgTitle={name}
						size
					/>
				</div>

				<div className='referral__user-info'>
					<Text
						className='referral__name'
					>
						{name}
					</Text>

					<Link
						className='referral__email'
						href={mailto}
						mod='link--gray'
					>
						<Text
							size='text--sm'
						>
							{email}
						</Text>
					</Link>

				</div>
			</div>

			<div className="referral__btn">
				<Btn
					icon
					iconMod='btn--icon-gray'
					buttonText=''
					iconLeft={
						<Icon
							icons={IconMore}
							name="icon--more"
							iconMod='icon--18'
						/>
					}
				/>
			</div>
		</div>
	)
}

// mixin referral-item(data)
// div.referral-item(class!=attributes.class)
// 	div.referral__status
// 		+badge(data.badge)(class=data.badge_class)
// 	div.referral__user
// 		div.referral__user-pik
// 			+user-pik(data.user_pik)(class="user-pic--big")
// 		div.referral__user-info
// 			p.referral__name.text.text--sm!=data.name
// 			a.referral__email.text.text--sm.link.link--gray(href="mailto:email")!=data.email
// 	div.referral__btn
// 		+btn({icon_l: 'icon--more', icon_width: 'icon--18'})(class="icon--block icon--block-gray")