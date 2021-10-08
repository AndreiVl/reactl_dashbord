import React from "react";
import './summary-item.scss';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';

type SummaryItemProps = {
	title?: string,
	text?: string,
	icon?: string,
	iconName?: string,
	className?: string
}

export const SummaryItem: React.FC<SummaryItemProps> = ({
	title = 'Tools',
	text = 'Related Tags - Unspent Outputs',
	icon,
	iconName,
	className
}) => {
	return (
		<div className={`summary-item ${className || ""}`}>
			<div className="summary-item__body">
				<Text
					className="summary-item__title"
					color="text--black"
				>
					{title}
				</Text>
				<Text
					className="summary-item__text"
				>
					{text}
				</Text>
			</div>
			{icon &&
				<Icon
					icons={icon}
					name={iconName}
					iconMod="icon--18"
				/>
			}
		</div>
	)
}