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