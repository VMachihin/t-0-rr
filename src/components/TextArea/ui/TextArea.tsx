import { FC } from 'react'
import classNames from 'classnames'
import { ITextAreaProps } from '@/types/textArea'

import { Icon } from '@/components/Icon'

import styles from './textArea.module.scss'

export const TextArea: FC<ITextAreaProps> = (props) => {
	const { id, value, label, placeholder, className, onChange, disabled = false } = props

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange?.(event.target.value)
	}

	return (
		<div className={classNames(styles.wrapper, className)}>
			{label && <label className={styles['textArea-label']}>{label}</label>}

			<textarea
				name={id}
				id={id}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
				className={styles.textArea}
				spellCheck
				disabled={disabled}
			/>

			{disabled && <Icon iconId='lock' className={styles.textArea__icon_lock} />}
		</div>
	)
}
