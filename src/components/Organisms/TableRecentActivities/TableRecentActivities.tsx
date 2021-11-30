import React from 'react';
import './table-recent-activities.scss';


type TableRecentActivitiesProps = {
	className?: string
	title?: React.ReactNode,
	btn?: React.ReactNode,
	table?: React.ReactNode,
}

export const TableRecentActivities: React.FC<TableRecentActivitiesProps> = ({
	className = '',
	title,
	btn,
	table,
}) => {
	return (
		<div className={`table-recent-activities ${className || ''}`}>
			<div className="table-recent-activities__header">
				<div className="table-recent-activities__title">
					{title}
				</div>
				{btn}
			</div>

			{table}
		</div>
	)
}

// div.table-recent-activities
// 	div.table-recent-activities__header
// 		h2.table-recent-activities__title.h4 Recent Activities
// 		+btn({icon_l: 'icon--more', icon_width: 'icon--18'})(class="icon--block")
// 	+table({
// 		title: 'Recent Activities',
// 		thead: {
// 			class: "table-head__recent-activities",
// 			items: [
// 				{title: '#'},
// 				{title: 'Date'},
// 				{title: 'Time'},
// 				{title: 'Transaction ID'},
// 				{title: 'Status'},
// 				{title: 'Value'}
// 			]
// 		},
// 		items: [
// 			['1', '01.27.2019', '02:22 PM', 'DFRASEDE', name,  '$2.39'],
// 			['2', '01.27.2019', '02:22 PM', 'DFRASEDE', name2, '$2.39'],
// 			['3', '01.27.2019', '02:22 PM', 'DFRASEDE', name2,  '$2.39'],
// 			['4', '01.27.2019', '02:22 PM', 'DFRASEDE', name,  '$2.39'],
// 			['5', '01.27.2019', '02:22 PM', 'DFRASEDE', name2, '$2.39'],
// 			['6', '01.27.2019', '02:22 PM', 'DFRASEDE', name2, '$2.39'],
// 			['6', '01.27.2019', '02:22 PM', 'DFRASEDE', name, '$2.39']
// 		]
// 	})