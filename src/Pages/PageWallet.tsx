import React from 'react';
import { Wallet } from '../components/Organisms/Wallet/Wallet';
import { H1 } from '../components/Atoms/H1/H1';
import { Text } from '../components/Atoms/Text/Text';
import { WalletItem } from '../components/Molecules/WalletItem/WalletItem';
import IconBtc from '../assets/Icons/icon--btc.svg';
import IconNio from '../assets/Icons/icon--nio.svg';
import IconEth from '../assets/Icons/icon--eth.svg';
import IconUsd from '../assets/Icons/icon--usd.svg';
import IconEur from '../assets/Icons/icon--eur.svg';
import IconMore from '../assets/Icons/icon--more.svg';

type PageWalletProps = {
	className?: string
}

export const PageWallet: React.FC<PageWalletProps> = ({


}) => {
	return (
		<Wallet
			title={
				<H1 text='Wallet' />
			}
			lead={
				<Text>See full list of your orders of your account</Text>
			}
			walletItems={[
				{
					title: <Text fontWeight='text--bold'>Crypto Accounts</Text>,
					walletItem: [
						<WalletItem
							icons={IconBtc}
							name='icon--btc'
							iconMod='icon--32'
							iconBtn={IconMore}
							iconNameBtn='icon--more'
							title='Bitcoin Wallet'
							crypto='26.509505 BTC'
							currency='10,924.63USD'
							itemsLink={[
								{
									href: '#',
									link: 'Send'
								},
								{
									href: '#',
									link: 'Receive'
								},
								{
									href: '#',
									link: 'Withdraw'
								}
							]}
						/>,
						<WalletItem
							icons={IconNio}
							name='icon--nio'
							iconMod='icon--32'
							iconBtn={IconMore}
							iconNameBtn='icon--more'
							title='NioWallet'
							crypto='2.732058 NIO'
							currency='5,924.63USD'
							itemsLink={[
								{
									href: '#',
									link: 'Send'
								},
								{
									href: '#',
									link: 'Receive'
								},
								{
									href: '#',
									link: 'Withdraw'
								}
							]}
						/>,
						<WalletItem
							icons={IconEth}
							name='icon--eth'
							iconMod='icon--32'
							iconBtn={IconMore}
							iconNameBtn='icon--more'
							title='Ethereum Wallet'
							crypto='0.452058 ETH'
							currency='33,924.63USD'
							itemsLink={[
								{
									href: '#',
									link: 'Send'
								},
								{
									href: '#',
									link: 'Receive'
								},
								{
									href: '#',
									link: 'Withdraw'
								}
							]}
						/>,
					]
				},
				{
					title: <Text fontWeight='text--bold'>Fiat Accounts</Text>,
					walletItem: [
						<WalletItem
							icons={IconUsd}
							name='icon--usd'
							iconMod='icon--32'
							iconBtn={IconMore}
							iconNameBtn='icon--more'
							title='USD Account'
							crypto='2.732058 USD'
							currency='4,924.63USD'
							itemsLink={[
								{
									href: '#',
									link: 'Send'
								},
								{
									href: '#',
									link: 'Receive'
								},
								{
									href: '#',
									link: 'Withdraw'
								}
							]}
						/>,
						<WalletItem
							icons={IconEur}
							name='icon--eur'
							iconMod='icon--32'
							iconBtn={IconMore}
							iconNameBtn='icon--more'
							title='EUR Account'
							crypto='2.732058 EUR'
							currency='10,924.63USD'
							itemsLink={[
								{
									href: '#',
									link: 'Send'
								},
								{
									href: '#',
									link: 'Receive'
								},
								{
									href: '#',
									link: 'Withdraw'
								}
							]}
						/>
					]
				}
			]}
		/>
	)
}