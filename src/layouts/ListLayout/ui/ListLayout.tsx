import { FC, useState } from 'react'
import { IListLayoutProps } from '@/shared/types/page-layout'

import { TotalInfo } from '@/widgets/TotalInfo'
import { Input } from '@/shared/ui/Input'

import styles from './list-layout.module.scss'

export const ListLayout: FC<IListLayoutProps> = ({ title, totalInfoData, children }) => {
	const [value, setValue] = useState('')

	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<h2 className={styles.title}>{title}</h2>

				<Input
					id='operations-search'
					placeholder='Искать по наименованию..'
					hasIconSearch
					hasResetIcon
					className={styles.input}
					value={value}
					onChange={(event) => {
						setValue(event?.currentTarget.value ?? '')
					}}
				/>

				{totalInfoData && <TotalInfo totalInfo={totalInfoData} />}
			</div>

			<div className={styles.content}>{children}</div>
		</section>
	)
}
