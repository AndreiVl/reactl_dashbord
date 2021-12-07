import React from "react";
import './setting-item.scss';
import { H3 } from '../../Atoms/H3/H3';
import { Btn } from '../../Atoms/Btn/Btn';
import { Icon } from '../../Atoms/Icon/Icon';
import { Link } from '../../Atoms/Link/Link';
import IconArrowRight from '../../../assets/Icons/icon--arrow-right.svg';

type SettingItemProps = {
	settingItemTitle?: string,
	settingItemInfo?: string,
	settingItemBtn?: boolean
	settingItemLink?: string,
	settingItemUrl?: string,
	className?: string
}

export const SettingItem: React.FC<SettingItemProps> = ({
	settingItemTitle = 'Full Name',
	settingItemInfo = 'Abu Bin Ishtiyak',
	settingItemBtn,
	settingItemLink,
	settingItemUrl = '#',
	className,
}) => {
	return (
		<div className={`setting-item ${className || ''}`}>
			<div className="setting-item__left">
				<H3 className='setting-item__title' text={settingItemTitle} color='h3--gray' />
				<H3 className='setting-item__info' text={settingItemInfo} color='h3--gray' />
			</div>

			<div className="setting-item__right">
				{settingItemBtn &&
					<Btn
						icon
						buttonText=''
						iconMod='btn--icon-gray'
						iconLeft={
							<Icon
								icons={IconArrowRight}
								name="icon--arrow-right"
							/>
						}
					/>
				}
				{settingItemLink &&
					<Link className='setting-item__link' href={settingItemUrl}>
						<H3 text={settingItemLink} />
					</Link>
				}
			</div>
		</div>
	)
}