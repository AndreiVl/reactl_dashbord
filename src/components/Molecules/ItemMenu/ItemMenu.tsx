import React from "react";
import { NavLink } from "react-router-dom";
import './item-menu.scss';
import { Icon } from '../../Atoms/Icon/Icon';
import { Text } from '../../Atoms/Text/Text';

type ItemMenuProps = {
	url?: string,
	link: string
	icon: string,
	iconName: string
	className?: string
}

export const ItemMenu: React.FC<ItemMenuProps> = ({
	url = '#',
	link,
	icon,
	iconName,
	className,
}) => {
	return (
		<a href={url} className={`item-menu ${className || ''}`}>
			<div className="item-menu__icon">
				<Icon
					icons={icon}
					name={iconName}
				/>
			</div>
			<div className="item-menu__text">
				<Text>
					{link}
				</Text>
			</div>
		</a>
	)
}