import { useLocation } from 'react-router'
import classNames from 'classnames'
import { useFiltersMenu } from '@/hooks/useFiltersMenu'
import { useModal } from '@/hooks/useModal'
import { useEditingMode } from '@/hooks/useEditingMode'

import { Button } from '@/components/Button'

import styles from './actions-menu.module.scss'

export const ActionsMenu = () => {
	const path = useLocation().pathname.substring(1).split('/')[0]

	const { handleOpenFilterMenu } = useFiltersMenu()
	const { handleOpenModal } = useModal()
	const { isEditingModeActive, handleActiveEditingMode } = useEditingMode()

	const isEditingAction = path === ('organization' as string) || path === ('counterparty' as string)
	const isDownLoadAction =
		path === ('operations' as string) ||
		path === ('organizations' as string) ||
		path === ('counterparties' as string)

	return (
		<div className={styles['actions-menu']}>
			<ul className={styles['actions-menu__list']}>
				{isEditingAction && (
					<li className={styles['actions-menu__item']}>
						<Button
							id='editing'
							mode='clear'
							className={classNames(styles['actions-menu__button-editing'], {
								[styles.active]: isEditingModeActive,
							})}
							onClick={handleActiveEditingMode}
						/>
					</li>
				)}

				<li className={styles['actions-menu__item']}>
					<Button
						id='add'
						mode='clear'
						className={styles['actions-menu__button-add']}
						onClick={(event) => handleOpenModal(event)}
					/>
				</li>

				{path === 'operations' && (
					<li className={styles['actions-menu__item']}>
						<Button
							mode='clear'
							className={styles['actions-menu__button-search']}
							onClick={handleOpenFilterMenu}
						/>
					</li>
				)}

				{path === 'operations' && (
					<li className={styles['actions-menu__item']}>
						<Button
							id='upload'
							mode='clear'
							className={styles['actions-menu__button-import']}
							onClick={(event) => handleOpenModal(event)}
						/>
					</li>
				)}

				{isDownLoadAction && (
					<li className={styles['actions-menu__item']}>
						<Button
							id='unload'
							mode='clear'
							className={styles['actions-menu__button-download']}
							onClick={(event) => handleOpenModal(event)}
						/>
					</li>
				)}

				{path === 'operations' && (
					<li className={styles['actions-menu__item']}>
						<Button mode='clear' className={styles['actions-menu__button-graph']} />
					</li>
				)}
			</ul>

			<ul className={styles['actions-menu__list']}>
				<li className={styles['actions-menu__item']}>
					<Button mode='clear' className={styles['actions-menu__button-mail']} />
				</li>

				<li className={styles['actions-menu__item']}>
					<Button mode='clear' className={styles['actions-menu__button-faq']} />
				</li>

				<li className={styles['actions-menu__item']}>
					<Button
						id='settings'
						mode='clear'
						className={styles['actions-menu__button-settings']}
						onClick={(event) => handleOpenModal(event)}
					/>
				</li>
			</ul>
		</div>
	)
}
