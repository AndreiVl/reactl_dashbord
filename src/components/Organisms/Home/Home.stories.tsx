import React from 'react';
import { Home } from './Home';
import { H1 } from '../../Atoms/H1/H1';
import { Btn } from '../../Atoms/Btn/Btn';
import { СurrencyСard } from '../../Molecules/СurrencyСard/СurrencyСard';
import { Tradingview } from '../../Organisms/Tradingview/Tradingview';
import { TableRecentActivities } from '../../Organisms/TableRecentActivities/TableRecentActivities';
import { H4 } from '../../Atoms/H4/H4';
import { Icon } from '../../Atoms/Icon/Icon';
import { Table } from '../../Molecules/Table/Table';
import { Badge } from '../../Atoms/Badge/Badge';
import IconMore from '../../../assets/Icons/icon--more.svg';
import IconBtcOrange from '../../../assets/Icons/icon--btc-orange.svg';

export default {
	title: 'Components/Organisms/Home',
	component: Home,
};


export const HomeDefault = () => (
	<Home
		title={
			<H1>
				Welcome!
			</H1>
		}
		btn={
			<Btn>
				Download Report
			</Btn>
		}
		currencyCardItems={[
			<СurrencyСard
				name='BTC Wallet'
				total='1.12048 BTC'
				course='1,125.4 USD'
				icon={IconBtcOrange}
				iconName='icon--btc-orange'
			/>,
			<СurrencyСard
				name='BTC Wallet'
				total='1.12048 BTC'
				course='1,125.4 USD'
				icon={IconBtcOrange}
				iconName='icon--btc-orange'
			/>,
			<СurrencyСard
				name='BTC Wallet'
				total='1.12048 BTC'
				course='1,125.4 USD'
				icon={IconBtcOrange}
				iconName='icon--btc-orange'
			/>,
		]}
		tradingview={
			<Tradingview />
		}
		bottom={
			<TableRecentActivities
				title={
					<H4>
						Recent Activities
					</H4>
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
									<Badge>
										Paused
									</Badge>,
									'$2.39'
								]
							},
							{
								itemsTd: [
									'1',
									'01.27.2019',
									'02:22 PM',
									'DFRASEDE',
									<Badge color='badge--green'>
										Completed
									</Badge>,
									'$2.39'
								]
							},
							{
								itemsTd: [
									'1',
									'01.27.2019',
									'02:22 PM',
									'DFRASEDE',
									<Badge color='badge--green'>
										Completed
									</Badge>,
									'$2.39'
								]
							},
							{
								itemsTd: [
									'1',
									'01.27.2019',
									'02:22 PM',
									'DFRASEDE',
									<Badge>
										Paused
									</Badge>,
									'$2.39'
								]
							},
							{
								itemsTd: [
									'1',
									'01.27.2019',
									'02:22 PM',
									'DFRASEDE',
									<Badge color='badge--green'>
										Completed
									</Badge>,
									'$2.39'
								]
							},
							{
								itemsTd: [
									'1',
									'01.27.2019',
									'02:22 PM',
									'DFRASEDE',
									<Badge color='badge--green'>
										Completed
									</Badge>,
									'$2.39'
								]
							},
							{
								itemsTd: [
									'1',
									'01.27.2019',
									'02:22 PM',
									'DFRASEDE',
									<Badge>
										Paused
									</Badge>,
									'$2.39'
								]
							},
						]}
					/>
				}
			/>
		}
	/>
);