import React from 'react';
import { TableRecentActivities } from './TableRecentActivities';
import { H4 } from '../../Atoms/H4/H4';
import { Btn } from '../../Atoms/Btn/Btn';
import { Icon } from '../../Atoms/Icon/Icon';
import { Table } from '../../Molecules/Table/Table';
import { Badge } from '../../Atoms/Badge/Badge';
import IconMore from '../../../assets/Icons/icon--more.svg';

export default {
	title: 'Components/Organisms/TableRecentActivities',
	component: TableRecentActivities,
};


export const TableRecentActivitiesDefault = () => (
	<TableRecentActivities
		title={
			<H4 text='Recent Activities' />
		}
		btn={
			<Btn
				icon
				iconLeft={
					<Icon
						icons={IconMore}
						name='icon--more'
					/>
				}
			/>
		}
		table={
			<Table
				tHeadClass='table-head__recent-activities'
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
							<Badge text='Paused' />,
							'$2.39'
						]
					},
					{
						itemsTd: [
							'1',
							'01.27.2019',
							'02:22 PM',
							'DFRASEDE',
							<Badge text='Completed' color='badge--green' />,
							'$2.39'
						]
					},
					{
						itemsTd: [
							'1',
							'01.27.2019',
							'02:22 PM',
							'DFRASEDE',
							<Badge text='Completed' color='badge--green' />,
							'$2.39'
						]
					},
					{
						itemsTd: [
							'1',
							'01.27.2019',
							'02:22 PM',
							'DFRASEDE',
							<Badge text='Paused' />,
							'$2.39'
						]
					},
					{
						itemsTd: [
							'1',
							'01.27.2019',
							'02:22 PM',
							'DFRASEDE',
							<Badge text='Completed' color='badge--green' />,
							'$2.39'
						]
					},
					{
						itemsTd: [
							'1',
							'01.27.2019',
							'02:22 PM',
							'DFRASEDE',
							<Badge text='Completed' color='badge--green' />,
							'$2.39'
						]
					},
					{
						itemsTd: [
							'1',
							'01.27.2019',
							'02:22 PM',
							'DFRASEDE',
							<Badge text='Paused' />,
							'$2.39'
						]
					},
				]}
			/>
		}
	/>
);