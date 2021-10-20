import React from 'react';
import './tabs.scss';
import { Link } from '../../Atoms/Link/Link';
import { Text } from '../../Atoms/Text/Text';
import { Notification } from '../../Atoms/Notification/Notification';

type TabsProps = {
	items: {
		link?: string,
		href?: string,
		number?: number
		active?: boolean
	}[]
	className?: string
}

export const Tabs: React.FC<TabsProps> = ({
	className = '',
	items = [],
}) => {
	return (
		<ul className={`tabs ${className || ''}`}>
			{items.map((item, index) => (
				<li className={`tabs__item ${item.active ? 'active' : ''}`} key={index}>
					<Link
						href={item.href}
						className='tabs__link'
					>
						<Text
							className='tabs__text'
							fontWeight='text--semibold'
							color='text--black'
						>
							{item.link}
						</Text>

						{item.number &&
							<Notification number={item.number} />
						}
					</Link>
				</li>
			))}
		</ul>
	)
}