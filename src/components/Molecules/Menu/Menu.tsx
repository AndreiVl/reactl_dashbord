import React from "react";
import './menu.scss'
import { ItemMenu } from '../ItemMenu/ItemMenu'
import { H4 } from '../../Atoms/H4/H4'

type MenuProps = {
	title?: string,
	items: {
		menuUrl: string,
		menuLink: string,
		menuIcon: string,
		menuIconName: string,
	}[],
	className?: string
}

export const Menu: React.FC<MenuProps> = ({
	title = 'MAIN',
	items = [],
	className
}) => {
	return (
		<nav className={`menu ${className || ''}`}>
			<div className="menu__title">
				<H4 className=''>
					{title}
				</H4>
			</div>

			<ul className='menu__list'>
				{items.map((item, index) => (
					<li className="menu__item" key={index}>
						<ItemMenu
							url={item.menuUrl}
							link={item.menuLink}
							icon={item.menuIcon}
							iconName={item.menuIconName}
						/>
					</li>
				))}
			</ul>
		</nav>
	)
}