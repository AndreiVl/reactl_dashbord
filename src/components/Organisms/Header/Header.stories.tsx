import React from 'react';
import { Header } from './Header';
import { Logo } from '../../Atoms/Logo/Logo';
import { Search } from '../../Molecules/Search/Search';
import { HeaderProfile } from '../../Molecules/HeaderProfile/HeaderProfile';



export default {
	title: 'Components/Organisms/Header',
	component: Header,
};


export const HeaderDefault = () => (
	<Header
		logo={<Logo />}
		serch={
			<Search />
		}
		headerProfile={
			<HeaderProfile />
		}
	/>
);