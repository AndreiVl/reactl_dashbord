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
				buttonText=''
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

// mixin search(data)
// 	form.search(method="post" name="search" class!=attributes.class)
// 		+btn({icon_l: data.icon, text: data.text, type: 'submit'})(class="icon--block")
// 		+input({label_text: data.label_text, type: data.type ,name: data.name  , placeholder: data.placeholder})