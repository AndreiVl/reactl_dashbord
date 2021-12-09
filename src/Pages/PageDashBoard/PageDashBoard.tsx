import React from 'react';
import { Page } from '../../components//Organisms/Page/Page';
import { Header } from '../../components/Organisms/Header/Header';
import { Body } from '../../components/Organisms/Body/Body';
import { Sidebar } from '../../components/Organisms/Sidebar/Sidebar';
import { Main } from '../../components/Organisms/Main/Main';
import { Logo } from '../../components/Atoms/Logo/Logo';
import { Search } from '../../components/Molecules/Search/Search';
import { HeaderProfile } from '../../components/Molecules/HeaderProfile/HeaderProfile';
import { Link } from '../../components/Atoms/Link/Link';
import { Menu } from '../../components/Molecules/Menu/Menu';
import { ItemMenu } from '../../components/Molecules/ItemMenu/ItemMenu';
import IconWeb from '../../assets/Icons/icon--web.svg';
import IconListt from '../../assets/Icons/icon--list.svg';
import IconPlanet from '../../assets/Icons/icon--planet.svg';
import IconCard from '../../assets/Icons/icon--card.svg';
import IconRepeat from '../../assets/Icons/icon--repeat.svg';
import IconSettings from '../../assets/Icons/icon--settings.svg';
import IconRefresh from '../../assets/Icons/icon--refresh.svg';
import IconExit from '../../assets/Icons/icon--exit.svg';
import IconHelp from '../../assets/Icons/icon--help.svg';

type PageDashBoardProps = {
	content?: React.ReactNode,
}

export const PageDashBoard: React.FC<PageDashBoardProps> = ({
	content,
}) => {
	return (
		<Page>
			<Page>
				<Header
					logo={<Logo />}
					serch={
						<Search />
					}
					headerProfile={
						<HeaderProfile />
					}
				/>

				<Body>
					<Sidebar
						logo={
							<Logo />
						}
						menuItemsS={[
							<Menu
								title='Main'
								items={[
									{
										menuUrl: '#',
										menuLink: 'Dashboard',
										menuIcon: IconWeb,
										menuIconName: 'icon--web'
									},
									{
										menuUrl: '/order-book',
										menuLink: 'Order Book',
										menuIcon: IconListt,
										menuIconName: 'icon--list'
									},
									{
										menuUrl: '/chat',
										menuLink: 'Chat',
										menuIcon: IconPlanet,
										menuIconName: 'icon--planet'
									},
									{
										menuUrl: '/wallet',
										menuLink: 'Wallets',
										menuIcon: IconCard,
										menuIconName: 'icon--card'
									},
									{
										menuUrl: '/transactions',
										menuLink: 'Transactions',
										menuIcon: IconRepeat,
										menuIconName: 'icon--repeat'
									},
									{
										menuUrl: '/settings',
										menuLink: 'Settings',
										menuIcon: IconSettings,
										menuIconName: 'icon--settings'
									}
								]}
							/>,
							<Menu
								title='Additional'
								items={[
									{
										menuUrl: '/referral',
										menuLink: 'Referral',
										menuIcon: IconRefresh,
										menuIconName: 'icon--refresh'
									},
									{
										menuUrl: '#',
										menuLink: 'Logout',
										menuIcon: IconExit,
										menuIconName: 'icon--exit'
									}
								]}
							/>,
						]}
						itemMenu={
							<ItemMenu
								link='Help'
								icon={IconHelp}
								iconName='icon--help'
								className='item-menu--pd'
							/>
						}
						copy='Copyright © 2020'
						link={
							<Link>NG8.RU</Link>
						}
					/>
					<Main>

						{content}

					</Main>
				</Body>
			</Page>
		</Page>
	)
}