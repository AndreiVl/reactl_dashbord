import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tab-bar.scss';
import { Text } from '../../Atoms/Text/Text';

import { Link } from '../../Atoms/Link/Link';
import { Notification } from '../../Atoms/Notification/Notification';

type TabsProps = {
	tabItems?: {
		tab?: string,
		number?: number,
		red?: boolean,
	}[]
	contentItems?: React.ReactNode[],
	className?: string
}

export const TabBar: React.FC<TabsProps> = ({
	className = '',
	tabItems = [],
	contentItems = [],
}) => {
	return (
		<div className={`tab-bar ${className || ''}`}>
			<Tabs>
				<TabList>
					{tabItems.map((item, index) => (
						<Tab key={index}>
							<div className='tab-bar__item-tab'>
								<Text>{item.tab}</Text>
								{item.number &&
									<Notification red={item.red} number={item.number} />
								}
							</div>
						</Tab>
					))}
				</TabList>


				{contentItems.map((item, index) => (
					<TabPanel key={index}>{item}</TabPanel>
				))}
			</Tabs>
		</div>
	)
}