import React from "react";
import './icon.scss'

type IconProps = {
	icons: string,
	name?: string,
	iconMod?: string,
	color?: string,
	size?: number
}

export const Icon: React.FC<IconProps> = ({
	icons,
	name,
	iconMod,
	color,
	size = '24'
}) => {
	return (
		<svg className={`icon ${name} ${iconMod}`} fill={color} width={size} height={size}>
			<use xlinkHref={`${icons}#${name}`} />
		</svg>
	)
}

type IconListnProps = {
	items: {
		icons: string,
		name?: string,
		color?: string,
		size?: number
	}[]
}


export const IconList: React.FC<IconListnProps> = ({
	items = [],

}) => {
	return (
		<ul className="icon--list">
			{items.map((item, index) => (
				<li className="icon--list-item" key={index}>
					<Icon
						icons={item.icons}
						name={item.name}
						color={item.color}
						size={item.size}
					/>
					<span className="icon--list-name">{item.name}</span>
				</li>
			))}
		</ul>
	)
}


