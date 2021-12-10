import React from 'react';
import './referral.scss';

type ReferralProps = {
	className?: string,
	title?: React.ReactNode,
	lead?: React.ReactNode,
	desc?: React.ReactNode,
	subtitle?: React.ReactNode,
	sublead?: React.ReactNode,
	donloadInfo?: React.ReactNode,
	headItems?: React.ReactNode[],
	referralItems?: React.ReactNode[],
}

export const Referral: React.FC<ReferralProps> = ({
	className = '',
	title,
	lead,
	desc,
	subtitle,
	sublead,
	donloadInfo,
	headItems = [],
	referralItems = [],
}) => {
	return (
		<div className={`referral ${className || ''}`}>
			<div className="container container-fluid">
				<div className="row main__item">
					<div className="col-12">
						{title}
					</div>
				</div>

				<div className="row justify-content-between main__item">
					<div className="col-12 col-md-auto">
						<div className='referral__lead referral--mb-mob-viol'>
							{lead}
						</div>
					</div>
					<div className="col-12 col-md-auto">
						<div className='referral__desc'>
							{desc}
						</div>
					</div>
				</div>

				<div className="row main__item">
					<div className="col-12">
						<div className="referral--green">
							{subtitle}
						</div>

						<div className="referral--blue">
							{sublead}
						</div>
						<div className="referral__donload referral--bluee">
							{donloadInfo}
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<div className="referral__head-list">
							{headItems.map((item, index) => (
								<div className="referral__head-item" key={index}>
									{item}
								</div>
							))}
						</div>

						<ul className="referral__list">
							{referralItems.map((item, index) => (
								<li className="referral__item" key={index}>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}