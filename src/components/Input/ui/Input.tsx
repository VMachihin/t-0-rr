import { FC } from 'react'
import classNames from 'classnames'

import { IInputProps } from '@/types/input'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

import styles from './input.module.scss'

export const Input: FC<IInputProps> = (props) => {
	const {
		id,
		value,
		type = 'text',
		placeholder,
		className,
		hasIcon = false,
		label,
		onChange,
	} = props

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value)
	}

	const handleReset = () => {
		onChange?.('')
	}

	return (
		<div className={classNames(styles.wrapper, className)}>
			{label && <label className={styles['input-label']}>{label}</label>}

			<input
				type={type}
				name={id}
				id={id}
				value={value}
				className={classNames(styles.input, label ? styles['with-label'] : '')}
				placeholder={placeholder}
				onChange={handleChange}
			/>

			{!value && hasIcon ? <Icon iconId='input-search' className={styles.input__icon} /> : null}

			{value && (
				<Button
					mode='clear'
					type='reset'
					icon={<Icon iconId='input-reset' />}
					className={styles.input__icon}
					onClick={handleReset}
				/>
			)}
		</div>
	)
}
