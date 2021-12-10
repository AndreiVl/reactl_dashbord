import React from "react";
import './search.scss'
import { Btn } from '../../Atoms/Btn/Btn'
import { Input } from '../../Atoms/Input/Input'
import { Icon } from '../../Atoms/Icon/Icon'
import IconSearch from '../../../assets/Icons/icon--search.svg';

type SearchProps = {
	className?: string
}

export const Search: React.FC<SearchProps> = ({
	className,
}) => {
	return (
		<form action="" method="post" name="search" className={`search ${className || ''}`} >
			<Btn
				icon
				iconLeft={
					<Icon
						icons={IconSearch}
						name="icon--search"
					/>
				}
			/>
			<Input
				placeholder="Search here..."
				name="search"
				type="text"
			/>
		</form>
	)
}
