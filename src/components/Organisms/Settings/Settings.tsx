import React from 'react';
import './settings.scss';

type SettingsProps = {
	className?: string,
	title?: React.ReactNode,
	lead?: React.ReactNode,
	tabs?: React.ReactNode,
}

export const Settings: React.FC<SettingsProps> = ({
	className = '',
	title,
	lead,
	tabs,
}) => {
	return (
		<div className={`settings ${className || ''}`}>
			<div className="row main__item">
				<div className="col-12">
					<div className='settings__mrb-violet'>
						{title}
					</div>
					{lead}
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div className="settings__tabs">
						{tabs}
					</div>
				</div>
			</div>
		</div>
	)
}






// div.settings
// div.row.main__item
// 	div.col-12
// 		h1.h1.settings__mrb-violet My Profile
// 		p.text You have full control to manage your own account setting.
// div.row
// 	div.col-12
// 		div.settings__tabs
// 			+tabs([
// 				{url: '#tab-1', link: 'Personal'},
// 				{url: '#tab-2', link: 'Security'},
// 				{url: '#tab-3', link: 'Notifications'},
// 				{url: '#tab-4', link: 'Connect Social'}
// 			])(class="tabs--setting main__item")
// 			div.settings__tab(id='tab-1')
// 				div.settings__upgrade.main__item
// 					p.settings__upgrade__text.text Upgrade your account to unlock full feature and increase your limit of transaction amount.
// 					div.settings__upgrade-action
// 						a.settings__upgrade-link.link.link--textdecor(href="#") Learn More
// 						+btn({text:'Upgrade'})
// 				h2.h2.settings__mrb-blue Personal Information
// 				p.text.text--semibold.main__item Basic info, like your name and address, that you use on Nio Platform.
// 				div.settings__title
// 					p.text.text--sm.text--bold.text--uper BASICS
// 				ul.settings__list 
// 					li.settings__item
// 						+setting-item({title: 'Full Name', info: 'Abu Bin Ishtiyak', btn: true, btn_icon: 'icon--arrow-right'})
// 					li.settings__item
// 						+setting-item({title: 'Display Name', info: 'Ishtiyak', btn: true, btn_icon: 'icon--arrow-right'})
// 					li.settings__item
// 						+setting-item({title: 'Email', info: 'info@softnio.com', btn: true, btn_icon: 'icon--lock', disabled: true})
// 					li.settings__item
// 						+setting-item({title: 'Phone Number', info: 'Not add yet', btn: true, btn_icon: 'icon--arrow-right'})
// 					li.settings__item
// 						+setting-item({title: 'Date of Birth', info: '2337 Kildeer Drive, Kentucky, Canada', btn: true, btn_icon: 'icon--arrow-right'})
// 					li.settings__item
// 						+setting-item({title: 'Phone Number', info: 'Not add yet', btn: true, btn_icon: 'icon--arrow-right'})
// 				div.settings__title
// 					p.text.text--sm.text--bold.text--uper PREFERENCES
// 				ul.settings__list 
// 					li.settings__item
// 						+setting-item({title: 'Language', info: 'English (United State)', url: "#", link: 'Change Language'})(class="setting-item--link")
// 					li.settings__item
// 						+setting-item({title: 'Date Format', info: 'M d, YYYY', url: "#", link: 'Change'})(class="setting-item--link")
// 					li.settings__item
// 						+setting-item({title: 'Timezone', info: 'Bangladesh (GMT +6)', url: "#", link: 'Change'})(class="setting-item--link")
// 			div.settings__tab(id='tab-2') 2
// 			div.settings__tab(id='tab-3') 3
// 			div.settings__tab(id='tab-4') 4