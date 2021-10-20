import React from 'react';
import './table.scss';

type TableProps = {
	tHeadClass?: string,
	tHead: string[],
	tBody: {
		itemsTd: React.ReactNode[]
	}[],
	className?: string
}

export const Table: React.FC<TableProps> = ({
	tHead,
	tBody,
	tHeadClass,
	className = '',
}) => {
	return (
		<table className={`table ${className || ''}`}>
			<Thead items={tHead} className={tHeadClass} />

			<Tbody items={tBody} />
		</table>
	)
}


type TheadProps = {
	className?: string
	items: string[]
}

const Thead: React.FC<TheadProps> = ({
	className,
	items = [],
}) => {
	return (
		<thead className={`table__head ${className || ''}`} >
			<tr>
				{items.map((item, index) => (
					<th key={index} className='text text--bold'>
						{item}
					</th>
				))}
			</tr>
		</thead>
	)
}


type TbodyProps = {
	items: {
		itemsTd: React.ReactNode[]
	}[]
}

const Tbody: React.FC<TbodyProps> = ({
	items
}) => {
	return (
		<tbody className='table__body' >
			{items.map((item, index) => (
				<Trow items={item.itemsTd} key={index} />
			))}
		</tbody>
	)
}

type TrowProps = {
	items: React.ReactNode[]
}

const Trow: React.FC<TrowProps> = ({
	items = [],
}) => {
	return (
		<tr className='table__item' >
			{items.map((item, index) => (
				<td className='text' key={index}>
					{item}
				</td>
			))}
		</tr>
	)
}