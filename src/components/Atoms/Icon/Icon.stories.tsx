import React from 'react';
import { Icon, IconList } from './Icon';
import IconClose from '../../../assets/Icons/icon--close.svg';
import IconApps from '../../../assets/Icons/icon--apps.svg';
import IconArrowRight from '../../../assets/Icons/icon--arrow-right.svg';
import IconBtcOrange from '../../../assets/Icons/icon--btc-orange.svg';
import IconBtc from '../../../assets/Icons/icon--btc.svg';
import IconCard from '../../../assets/Icons/icon--card.svg';
import IconChart from '../../../assets/Icons/icon--chart.svg';
import IconCheck from '../../../assets/Icons/icon--check.svg';
import IconClip from '../../../assets/Icons/icon--clip.svg';
import IconCopy from '../../../assets/Icons/icon--copy.svg';
import IconEthBlue from '../../../assets/Icons/icon--eth-blue.svg';
import IconEth from '../../../assets/Icons/icon--eth.svg';
import IconEur from '../../../assets/Icons/icon--eur.svg';
import IconExit from '../../../assets/Icons/icon--exit.svg';
import IconHamburger from '../../../assets/Icons/icon--hamburger.svg';
import IconHelp from '../../../assets/Icons/icon--help.svg';
import IconListt from '../../../assets/Icons/icon--list.svg';
import IconLock from '../../../assets/Icons/icon--lock.svg';
import IconLtc from '../../../assets/Icons/icon--ltc.svg';
import IconMail from '../../../assets/Icons/icon--mail.svg';
import IconMoney from '../../../assets/Icons/icon--money.svg';
import IconMore from '../../../assets/Icons/icon--more.svg';
import IconNio from '../../../assets/Icons/icon--nio.svg';
import IconNotifications from '../../../assets/Icons/icon--notifications.svg';
import IconPlain from '../../../assets/Icons/icon--plain.svg';
import IconPlanet from '../../../assets/Icons/icon--planet.svg';
import IconRefresh from '../../../assets/Icons/icon--refresh.svg';
import IconReloadSharp from '../../../assets/Icons/icon--reload-sharp.svg';
import IconRepeat from '../../../assets/Icons/icon--repeat.svg';
import IconSearch from '../../../assets/Icons/icon--search.svg';
import IconSettings from '../../../assets/Icons/icon--settings.svg';
import IconShare from '../../../assets/Icons/icon--share.svg';
import IconUsd from '../../../assets/Icons/icon--usd.svg';
import IconWeb from '../../../assets/Icons/icon--web.svg';

export default {
	title: 'Components/Atoms/Icons',
	component: Icon,
};

export const IconCloseDefault = () => (
	<Icon
		icons={IconClose}
		name="icon--close"
	/>
);
export const IconCloseMod = () => (
	<Icon
		icons={IconClose}
		name="icon--close"
		iconMod="icon--32"
	/>
);

export const IconListDefault = () => (
	<IconList
		items={[
			{
				icons: IconApps,
				name: 'icon--apps'
			},
			{
				icons: IconArrowRight,
				name: 'icon--arrow-right'
			},
			{
				icons: IconBtcOrange,
				name: 'icon--btc-orange'
			},
			{
				icons: IconBtc,
				name: 'icon--btc'
			},
			{
				icons: IconCard,
				name: 'icon--card'
			},
			{
				icons: IconChart,
				name: 'icon--chart'
			},
			{
				icons: IconCheck,
				name: 'icon--check'
			},
			{
				icons: IconClip,
				name: 'icon--clip'
			},
			{
				icons: IconClose,
				name: 'icon--close'
			},
			{
				icons: IconCopy,
				name: 'icon--copy'
			},
			{
				icons: IconEthBlue,
				name: 'icon--eth-blue'
			},
			{
				icons: IconEth,
				name: 'icon--eth'
			},
			{
				icons: IconEur,
				name: 'icon--eur'
			},
			{
				icons: IconExit,
				name: 'icon--exit'
			},
			{
				icons: IconHamburger,
				name: 'icon--hamburger'
			},
			{
				icons: IconHelp,
				name: 'icon--help'
			},
			{
				icons: IconListt,
				name: 'icon--list'
			},
			{
				icons: IconLock,
				name: 'icon--lock'
			},
			// {
			// 	icons: IconLtc,
			// 	name: 'icon--ltc'
			// },
			{
				icons: IconMail,
				name: 'icon--mail'
			},
			{
				icons: IconMoney,
				name: 'icon--money'
			},
			{
				icons: IconMore,
				name: 'icon--more'
			},
			{
				icons: IconNio,
				name: 'icon--nio'
			},
			{
				icons: IconNotifications,
				name: 'icon--notifications'
			},
			{
				icons: IconPlain,
				name: 'icon--plain'
			},
			{
				icons: IconPlanet,
				name: 'icon--planet'
			},
			{
				icons: IconRefresh,
				name: 'icon--refresh'
			},
			// {
			// 	icons: IconReloadSharp,
			// 	name: 'icon--reload-sharp'
			// },
			{
				icons: IconRepeat,
				name: 'icon--repeat'
			},
			{
				icons: IconSearch,
				name: 'icon--search'
			},
			{
				icons: IconSettings,
				name: 'icon--settings'
			},
			{
				icons: IconShare,
				name: 'icon--share'
			},
			{
				icons: IconUsd,
				name: 'icon--usd'
			},
			{
				icons: IconWeb,
				name: 'icon--web'
			}
		]}
	/>
);