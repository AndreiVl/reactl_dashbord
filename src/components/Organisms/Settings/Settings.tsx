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

					<div className='settings__lead'>
						{lead}
					</div>

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