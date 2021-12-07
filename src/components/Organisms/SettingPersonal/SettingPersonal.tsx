import React from 'react';
import './setting-personal.scss';

type SettingPersonalProps = {
	className?: string,
	textUgrade?: React.ReactNode,
	link?: React.ReactNode,
	button?: React.ReactNode,
	title?: React.ReactNode,
	lead?: React.ReactNode,
	subtitle?: React.ReactNode,
	subtitleTwo?: React.ReactNode,
	settingPersonaBasics?: React.ReactNode[],
	settingPersonaPreference?: React.ReactNode[],
}

export const SettingPersonal: React.FC<SettingPersonalProps> = ({
	className = '',
	textUgrade,
	link,
	button,
	title,
	lead,
	subtitle,
	subtitleTwo,
	settingPersonaBasics = [],
	settingPersonaPreference = [],
}) => {
	return (
		<div className={`setting-personal ${className || ''}`}>
			<div className='setting-personal__upgrade main__item'>
				<div className='setting-personal__upgrade-text'>
					{textUgrade}
				</div>

				<div className='setting-personal__upgrade-action'>
					<div className='setting-personal__upgrade-link'>
						{link}
					</div>

					{button}
				</div>
			</div>

			<div className="setting-personal__mrb-blue">
				{title}
			</div>
			<div className="main__item">
				{lead}
			</div>

			<div className="setting-personal__title">
				{subtitle}
			</div>

			<ul className="setting-personal__list">
				{settingPersonaBasics.map((item, index) => (
					<li className="setting-personal__item" key={index}>
						{item}
					</li>
				))}
			</ul>

			<div className="setting-personal__title">
				{subtitleTwo}
			</div>

			<ul className="setting-personal__list">
				{settingPersonaPreference.map((item, index) => (
					<li className="setting-personal__item" key={index}>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}