import classNames from 'classnames'

import { useFiltersMenu } from '@/hooks/useFiltersMenu'

import { SelectC } from '@/components/Select'
import { Button } from '@/components/Button'
import { CheckBox } from '@/components/CheckBox'
import { Icon } from '@/components/Icon'

import styles from './filter-menu.module.scss'
//
import {
	articleOptions,
	counterpartiesOptions,
	dateOptions,
	directionsOptions,
	organizationOptions,
} from '@/mock/selectOptionTest' /* тест */

export const FilterMenu = () => {
	const { isOpenFiltersMenu, handleCloseFilterMenu } = useFiltersMenu()

	return (
		<div className={styles.filter}>
			<div
				className={classNames(styles.overlay, {
					[styles.isOpen]: isOpenFiltersMenu,
				})}
			>
				<div
					className={classNames(styles.content, {
						[styles.isOpen]: isOpenFiltersMenu,
					})}
				>
					<form action='#' className={styles.form}>
						<div className={styles.top}>
							<SelectC options={dateOptions} label='Диапазон дат' placeholder='От и до' />
							<SelectC options={organizationOptions} label='Организации' />
							<SelectC options={counterpartiesOptions} label='Контрагент' />
							<SelectC options={directionsOptions} label='Направления' />
							<SelectC options={articleOptions} label='Статья и подстатья' />
						</div>

						<div className={styles.bottom}>
							<SelectC options={articleOptions} label='Label' />
							<CheckBox label='Запомнить выбор' />

							<div className={styles['buttons-wrapper']}>
								<Button mode='primary' label='Применить' />
								<Button mode='secondary' label='Сбросить фильтр' />
							</div>
						</div>
					</form>

					<Button
						mode='clear'
						className={styles.close}
						icon={<Icon iconId='close' width='24px' height='24px' />}
						onClick={handleCloseFilterMenu}
					/>
				</div>
			</div>
		</div>
	)
}
