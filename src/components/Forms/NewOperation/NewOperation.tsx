import { FC } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import classNames from 'classnames'
import { TFormNewOperation } from '@/types/formNewOperation'
import { IFormProps } from '@/types/form'

import { useModal } from '@/hooks/useModal'

import { Select } from '@/components/Select'
import { Input } from '@/components/Input'
import { InputDate } from '@/components/InputDate'
import { TextArea } from '@/components/TextArea'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'

import { addOperation } from '@/mock/addOperation'

import styles from './new-operation.module.scss'

export const NewOperation: FC<IFormProps> = ({ labelBadge }) => {
	const { handleCloseModal } = useModal()
	const { control, handleSubmit, reset } = useForm<TFormNewOperation>({
		defaultValues: {
			organization: '',
			organizationAccount: '',
			counterparty: '',
			counterpartyAccount: '',
			date: null,
			bankID: '',
			sumOperation: '',
			nameOperation: '',
			comments: '',
			case: '',
			direction: '',
			article: '',
			payer: '',
		},
	})

	const onSubmit: SubmitHandler<TFormNewOperation> = (data) => {
		console.log(data)
		reset()
		handleCloseModal()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.addNewOperation}>
			{labelBadge && <Badge label={labelBadge} />}

			<div className={styles['main-info']}>
				<div className={classNames(styles.left, styles.hasArrow)}>
					<Controller
						name='organization'
						control={control}
						render={({ field }) => (
							<Select
								options={addOperation}
								value={field.value}
								label='Организация'
								onChange={field.onChange}
								className={styles['main-info-select']}
							/>
						)}
					/>

					<Controller
						name='organizationAccount'
						control={control}
						render={({ field }) => (
							<Select
								options={addOperation}
								value={field.value}
								label='Счет организации'
								onChange={field.onChange}
								className={styles['main-info-select']}
							/>
						)}
					/>
				</div>
				<div className={styles.right}>
					<Controller
						name='counterparty'
						control={control}
						render={({ field }) => (
							<Select
								options={addOperation}
								value={field.value}
								label='Контрагент'
								onChange={field.onChange}
								className={styles.addOperation__select}
							/>
						)}
					/>

					<Controller
						name='counterpartyAccount'
						control={control}
						render={({ field }) => (
							<Select
								options={addOperation}
								value={field.value}
								label='Счет контрагента'
								onChange={field.onChange}
								className={styles.addOperation__select}
							/>
						)}
					/>
				</div>
			</div>

			<div className={styles['extra-info']}>
				<div className={styles.left}>
					<div className={styles.wrapper}>
						<Controller
							name='date'
							control={control}
							render={({ field }) => (
								<InputDate date={field.value} onChange={(date) => field.onChange(date)} />
							)}
						/>
						<Controller
							name='bankID'
							control={control}
							render={({ field }) => (
								<Input
									id='bankID'
									label='Банковский ID (идентификатор)'
									value={field.value}
									onChange={(text) => field.onChange(text)}
									className={styles.idInput}
									maxLength={30}
								/>
							)}
						/>
					</div>

					<Controller
						name='sumOperation'
						control={control}
						rules={{
							validate: (value) =>
								/^\d{10,12}$/.test(value) || 'ИНН должен содержать 10 или 12 цифр',
						}}
						render={({ field }) => (
							<Input
								id='sumOperation'
								label='Сумма операции'
								value={field.value}
								onChange={(text) => field.onChange(text)}
								className={styles.sumInput}
								hasResetIcon={false}
								maxLength={40}
							/>
						)}
					/>

					<Controller
						name='nameOperation'
						control={control}
						render={({ field }) => (
							<TextArea
								id='nameOperation'
								label='Наименование операции'
								value={field.value}
								onChange={(text) => field.onChange(text)}
							/>
						)}
					/>
					<Controller
						name='comments'
						control={control}
						render={({ field }) => (
							<TextArea
								id='comments'
								label='Комментарий сотрудника'
								value={field.value}
								onChange={(text) => field.onChange(text)}
							/>
						)}
					/>
				</div>

				<div className={styles.right}>
					<Controller
						name='case'
						control={control}
						render={({ field }) => (
							<Select
								options={addOperation}
								value={field.value}
								label='Кейс / сделка'
								onChange={field.onChange}
								className={styles['main-info-select']}
							/>
						)}
					/>
					<Controller
						name='direction'
						control={control}
						render={({ field }) => (
							<Select
								options={addOperation}
								value={field.value}
								label='Направление операции'
								onChange={field.onChange}
								className={styles['main-info-select']}
							/>
						)}
					/>
					<Controller
						name='article'
						control={control}
						render={({ field }) => (
							<Select
								options={addOperation}
								value={field.value}
								label='Статья / подстатья'
								onChange={field.onChange}
								className={styles['main-info-select']}
							/>
						)}
					/>
					<Controller
						name='payer'
						control={control}
						render={({ field }) => (
							<Select
								options={addOperation}
								value={field.value}
								label='Расходы на операцию несет'
								onChange={field.onChange}
								className={styles['main-info-select']}
							/>
						)}
					/>
				</div>
			</div>

			<Button type='submit' label='Создать операцию' mode='primary' />
		</form>
	)
}
