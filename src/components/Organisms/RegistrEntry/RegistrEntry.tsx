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

							{copy}
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

// div.registr-entry.registr-entry--sigin
// 	div.registr-entry__row
// 		div.registr-entry__left
// 			div.registr-entry__body
// 				div.registr-entry__top
// 					div.registr-entry__content
// 						+logo({img: 'logo.svg', alt: 'Crypto', title: 'Crypto'})

// 						div.registr-entry__form
// 							include ../form/form--sigin.pug

// 						p.text.registr-entry__mb-yellow New on our platform? 
// 							a.link(href="#" target="_blank") Create an account

// 						div.registr-entry__social
// 							span.registr-entry__or.text.text--esm.text--bold OR
// 							p.text.registr-entry__mb-yellow
// 								a.link.registr-entry__fb(href="#") Facebook
// 								a.link(href="#") Google
// 							p.text I don't have an account? 
// 								a.link(href="#" target="_blank") Try 15 days free

// 				div.registr-entry__bottom
// 					div.registr-entry__links
// 						a.text.text--sm.link(href="#") Terms & Condition
// 						a.text.text--sm.link(href="#") Privacy Policy
// 						a.text.text--sm.link(href="#") Help
// 					p.text.text--black © 2019 DashLite. All Rights Reserved.
// 		div.registr-entry__right
// 			div.registr-entry__slider
// 				include ../../molecules/slider/slider.pug