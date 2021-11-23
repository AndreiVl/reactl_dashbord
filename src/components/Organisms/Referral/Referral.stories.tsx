import React from 'react';
import { Referral } from './Referral';
import { H1 } from '../../Atoms/H1/H1';
import { H2 } from '../../Atoms/H2/H2';
import { H3 } from '../../Atoms/H3/H3';
import { Text } from '../../Atoms/Text/Text';
import { Link } from '../../Atoms/Link/Link';
import { Btn } from '../../Atoms/Btn/Btn';
import { Icon } from '../../Atoms/Icon/Icon';
import { ReferralItem } from '../../Molecules/ReferralItem/ReferralItem';
import iconCopy from '../../../assets/Icons/icon--copy.svg';
import UserImgTwo from '../../../assets/images/referral__img-02.png';
import UserImgTwo2x from '../../../assets/images/referral__img-02@2x.png';
import UserImgThree from '../../../assets/images/referral__img-03.png';
import UserImgThree2x from '../../../assets/images/referral__img-03@2x.png';

export default {
	title: 'Components/Organisms/Referral',
	component: Referral,
};


export const ReferralDefault = () => (
	<Referral
		title={
			<H1 text='Referral' />
		}
		lead={
			<Text fontWeight='text--semibold' color='text--black'>Agent Management </Text>
		}
		desc={
			<Text fontWeight='text--semibold'>Accounts</Text>
		}
		subtitle={
			<H2 text='Affiliate' />
		}
		sublead={
			<Text>Get referal bonuses by sharing your referal link with friends</Text>
		}
		donloadInfo={
			<>
				<Text>
					<Link href='#' mod='link--gray'>https//gogeafrica.com/register/agentrose</Link>
				</Text>
				<Btn
					icon
					iconMod='btn--icon-darkgray'
					iconLeft={
						<Icon
							iconMod='icon--18'
							icons={iconCopy}
							name="icon--copy"
						/>
					}
				/>
			</>
		}
		headItems={[
			<H3 text='Account Status' />,
			<>
				<H3 text='User Name' />
				<H3 text='Email' />
			</>,
			<H3 text='Action' />,
		]}
		referralItems={[
			<ReferralItem
				badgeColor='badge--green'
				badgeText='Active'
				name='Esther Howard'
				mailto='Esther@longmail.com'
				email='Esther@longmail.com'
			/>,
			<ReferralItem
				badgeColor='badge--green'
				badgeText='Active'
				imgUser={UserImgTwo}
				imgUser2x={UserImgTwo2x}
				name='Happy Hona'
				mailto='Happy@longmail.com'
				email='Happy@longmail.com'
			/>,
			<ReferralItem
				imgUser={UserImgThree}
				imgUser2x={UserImgThree2x}
				name='Jenny Wilson'
				mailto='WWILL@protonmail.com'
				email='WWILL@protonmail.com'
			/>
		]}
	/>

);