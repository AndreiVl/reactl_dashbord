import React from 'react';
import './sidebar.scss';
import { Btn } from '../../Atoms/Btn/Btn';
import { Icon } from '../../Atoms/Icon/Icon';
import { Text } from '../../Atoms/Text/Text';
import IconClose from '../../../assets/Icons/icon--close.svg';

type SidebarProps = {
	className?: string,
	logo?: React.ReactNode,
	menuItemsS?: React.ReactNode[],
	itemMenu?: React.ReactNode,
	copy?: string,
	link?: React.ReactNode,
}

export const Sidebar: React.FC<SidebarProps> = ({
	className = '',
	logo,
	menuItemsS = [],
	itemMenu,
	copy,
	link,
}) => {
	return (
		<aside className={`sidebar ${className || ''}`}>
			<div className="sidebar__mobile">
				{logo}
				<Btn icon
					iconLeft={
						<Icon
							icons={IconClose}
							name='icon--close'
						/>
					}
				/>
			</div>

			<div className="sidebar__body">
				<div className="sidebar__top">
					{menuItemsS.map((item, index) => (
						<div className="sidebar__item" key={index}>
							{item}
						</div>
					))}
				</div>

				<div className="sidebar__bottom">
					{itemMenu}
					<Text size='text--sm'>
						{copy} {link}
					</Text>
				</div>
			</div>
		</aside>
	)
}
