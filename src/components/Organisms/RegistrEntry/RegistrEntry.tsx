import React from 'react';
import './registr-entry.scss';

type RegistrEntryProps = {
	className?: string,
	logo?: React.ReactNode,
	form?: React.ReactNode,
	desc?: React.ReactNode,
	divider?: React.ReactNode,
	qvestion?: React.ReactNode,
	linksSocial?: React.ReactNode,
	bottomLinksItems?: React.ReactNode[],
	copy?: React.ReactNode,
	slider?: React.ReactNode,
}

export const RegistrEntry: React.FC<RegistrEntryProps> = ({
	className = '',
	logo,
	form,
	desc,
	divider,
	qvestion,
	linksSocial,
	bottomLinksItems = [],
	copy,
	slider,
}) => {
	return (
		<div className={`registr-entry ${className || ''}`}>
			<div className="registr-entry__row">
				<div className="registr-entry__left">
					<div className="registr-entry__body">
						<div className="registr-entry__top">
							<div className="registr-entry__content">
								{logo}

								<div className="registr-entry__form">
									{form}
								</div>

								<div className="registr-entry__mb-yellow">
									{desc}
								</div>

								<div className="registr-entry__social">
									<div className="registr-entry__or">
										{divider}
									</div>
									<div className='registr-entry__mb-yellow'>
										{linksSocial}
									</div>
									{qvestion}
								</div>
							</div>
						</div>

						<div className="registr-entry__bottom">
							<div className='registr-entry__links'>
								{bottomLinksItems.map((item, index) => (
									<div className='registr-entry__links-item' key={index}>
										{item}
									</div>
								))}
							</div>
							<div className='registr-entry__copy'>
								{copy}
							</div>
						</div>
					</div>
				</div>

				<div className="registr-entry__right">
					<div className="registr-entry__slider">
						{slider}
					</div>
				</div>
			</div>
		</div>
	)
}