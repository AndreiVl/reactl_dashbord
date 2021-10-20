import React from 'react';
import { Table } from './Table';
import { Badge } from '../../Atoms/Badge/Badge';

export default {
	title: 'Components/Molecules/Table',
	component: Table,
};
export const TableDefault = () => (
	<Table
		tHead={[
			'#', 'Date', 'Time', 'Transaction ID', 'Status'
		]}
		tBody={[
			{
				itemsTd: ['text', 'text', 'text', 'text', 'text']
			},
			{
				itemsTd: ['text', 'text', 'text', 'text', 'text']
			},
			{
				itemsTd: ['text', 'text', 'text', 'text', 'text']
			},
			{
				itemsTd: ['text', 'text', 'text', 'text', 'text']
			}
		]}
	/>
);
export const TableRecentActivities = () => (
	<Table
		tHeadClass='table__head--recent-activities'
		tHead={[
			'#', 'Date', 'Time', 'Transaction ID', 'Status', 'Value'
		]}
		tBody={[
			{
				itemsTd: [
					'1',
					'01.27.2019',
					'02:22 PM',
					'DFRASEDE',
					<Badge
						color='badge--green'
						text='Completed'
					/>,
					'$2.39'
				]
			},
			{
				itemsTd: [
					'2',
					'01.27.2019',
					'02:22 PM',
					'DFRASEDE',
					<Badge />,
					'$2.39'
				]
			},
			{
				itemsTd: [
					'3',
					'01.27.2019',
					'02:22 PM',
					'DFRASEDE',
					<Badge
						color='badge--green'
						text='Completed'
					/>,
					'$2.39'
				]
			}
		]}
	/>
);