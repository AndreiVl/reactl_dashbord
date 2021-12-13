import React from 'react';
import { Referral } from '../components/Organisms/Referral/Referral';
import { H1 } from '../components/Atoms/H1/H1';
import { H2 } from '../components/Atoms/H2/H2';
import { H3 } from '../components/Atoms/H3/H3';
import { Text } from '../components/Atoms/Text/Text';
import { Link } from '../components/Atoms/Link/Link';
import { Btn } from '../components/Atoms/Btn/Btn';
import { Icon } from '../components/Atoms/Icon/Icon';
import { ReferralItem } from '../components/Molecules/ReferralItem/ReferralItem';
import iconCopy from '../assets/Icons/icon--copy.svg';
import UserImgTwo from '../assets/images/referral__img-02.png';
import UserImgTwo2x from '../assets/images/referral__img-02@2x.png';
import UserImgThree from '../assets/images/referral__img-03.png';
import UserImgThree2x from '../assets/images/referral__img-03@2x.png';

type PageReferralProps = {

}

export const PageReferral: React.FC<PageReferralProps> = ({


}) => {
	return (
		<Referral
			title={
				<H1>
					Referral
				</H1>
			}
			lead={
				<Text>Agent Management </Text>
			}
			desc={
				<Text>Accounts</Text>
			}
			subtitle={
				<H2>
					Affiliate
				</H2>
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
				<H3>
					Account Status
				</H3>,
				<>
					<H3>
						User Name
					</H3>
					<H3>
						Email
					</H3>
				</>,
				<H3>
					Action
				</H3>,
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
	)
}