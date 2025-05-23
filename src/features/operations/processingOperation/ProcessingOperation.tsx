import { FC, useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import classNames from 'classnames'
import { TFormProcessingOperation } from '@/shared/types/forms'
import { IFormProps } from '@/shared/types/forms'

import { useModal } from '@/features/modal/hooks/useModal'
import { SelectC } from '@/shared/ui/Select'
import { Input } from '@/shared/ui/Input'
import { InputDate } from '@/shared/ui/InputDate'
import { TextArea } from '@/shared/ui/TextArea'
import { Button } from '@/shared/ui/Button'
import { TableProcessingOperation } from './tableProcessing/tableProcessingOperation'

import { organizations } from '@/mock/addOperation'

import styles from './processing-operation.module.scss'

export const ProcessingOperation: FC<IFormProps> = () => {
	const { handleCloseModal } = useModal()
	const [selectedDirection, setSelectedDirection] = useState<string>('')
	const { control, handleSubmit } = useForm<TFormProcessingOperation>()

	const onSubmit: SubmitHandler<TFormProcessingOperation> = (data) => {
		console.log(data)
		handleCloseModal()
	}

	const handleDirectionChange = (value: string) => {
		setSelectedDirection(value)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.addNewOperation}>
			<div className={styles['main-info']}>
				<div className={classNames(styles.left, styles.hasArrow)}>
					<Controller
						name='organization'
						control={control}
						render={({ field }) => (
							<SelectC
								options={organizations}
								values={field.value ? [{ value: field.value, label: field.value }] : []}
								label='Организация'
								onChange={field.onChange}
								className={styles['main-info-SelectC']}
							/>
						)}
					/>

					<Controller
						name='organizationAccount'
						control={control}
						render={({ field }) => (
							<SelectC
								options={organizations}
								values={field.value ? [{ value: field.value, label: field.value }] : []}
								label='Счет организации'
								onChange={field.onChange}
								className={styles['main-info-SelectC']}
							/>
						)}
					/>
				</div>
				<div className={styles.right}>
					<Controller
						name='counterparty'
						control={control}
						render={({ field }) => (
							<SelectC
								options={organizations}
								values={field.value ? [{ value: field.value, label: field.value }] : []}
								label='Контрагент'
								onChange={field.onChange}
								className={styles.addOperation__SelectC}
							/>
						)}
					/>

					<Controller
						name='counterpartyAccount'
						control={control}
						render={({ field }) => (
							<SelectC
								options={organizations}
								values={field.value ? [{ value: field.value, label: field.value }] : []}
								label='Счет контрагента'
								onChange={field.onChange}
								className={styles.addOperation__SelectC}
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
								<InputDate
									date={field.value}
									label='Дата операции'
									onChange={(date) => field.onChange(date)}
								/>
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
									maxLength={25}
								/>
							)}
						/>
					</div>

					<Controller
						name='sumOperation'
						control={control}
						render={({ field }) => (
							<Input
								id='sumOperation'
								label='Сумма операции'
								value={field.value}
								onChange={(text) => field.onChange(text)}
								className={styles.sumInput}
								hasResetIcon={false}
								maxLength={35}
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
						name='employeesComment'
						control={control}
						render={({ field }) => (
							<TextArea
								id='employeesComment'
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
							<SelectC
								options={organizations}
								values={field.value ? [{ value: field.value, label: field.value }] : []}
								label='Кейс / сделка'
								onChange={field.onChange}
								className={styles['main-info-SelectC']}
							/>
						)}
					/>
					<Controller
						name='direction'
						control={control}
						render={({ field }) => (
							<SelectC
								options={[
									{ value: 'income', label: 'ПРИХОД' },
									{ value: 'expense', label: 'РАСХОД' },
								]}
								values={field.value ? [{ value: field.value, label: field.value }] : []}
								label='Направление операции'
								onChange={(values) => {
									const value = values[0]?.value || ''
									field.onChange(value)
									handleDirectionChange(value)
								}}
								className={styles['main-info-SelectC']}
							/>
						)}
					/>

					{selectedDirection === 'expense' && (
						<Controller
							name='typeExpense'
							control={control}
							render={({ field }) => (
								<SelectC
									options={[
										{ value: 'direct', label: 'Прямые' },
										{ value: 'indirect ', label: 'Косвенные' },
									]}
									values={field.value ? [{ value: field.value, label: field.value }] : []}
									label='Тип расходов'
									onChange={field.onChange}
									className={styles['main-info-select']}
								/>
							)}
						/>
					)}

					<Controller
						name='article'
						control={control}
						render={({ field }) => (
							<SelectC
								options={organizations}
								values={field.value ? [{ value: field.value, label: field.value }] : []}
								label='Статья / подстатья'
								onChange={field.onChange}
								className={styles['main-info-SelectC']}
							/>
						)}
					/>
					<Controller
						name='payer'
						control={control}
						render={({ field }) => (
							<SelectC
								options={organizations}
								values={field.value ? [{ value: field.value, label: field.value }] : []}
								label='Расходы на операцию несет'
								onChange={field.onChange}
								className={styles['main-info-SelectC']}
							/>
						)}
					/>
				</div>
			</div>

			<Button type='submit' label='Сохранить' mode='primary' />

			<h3 className={styles.subTitle}>Деление операции</h3>

			<div className={styles.sum_block}>
				<Controller
					name='initialAmount'
					control={control}
					render={({ field }) => (
						<Input
							id='initialAmount'
							label='Первоначальная сумма'
							value={field.value}
							onChange={(text) => field.onChange(text)}
							className={styles.idInput}
							maxLength={25}
							disabled
						/>
					)}
				/>
				<Controller
					name='retainedAmount'
					control={control}
					render={({ field }) => (
						<Input
							id='retainedAmount'
							label='Нераспределенная сумма'
							value={field.value}
							onChange={(text) => field.onChange(text)}
							className={styles.idInput}
							maxLength={25}
							disabled
						/>
					)}
				/>
			</div>

			<TableProcessingOperation />

			<div className={styles.select_block}>
				<Controller
					name='counterpartyDivision'
					control={control}
					render={({ field }) => (
						<SelectC
							options={[]}
							values={field.value ? [{ value: field.value, label: field.value }] : []}
							label='Контрагент'
							onChange={field.onChange}
							className={styles.addOperation__SelectC}
						/>
					)}
				/>

				<Controller
					name='caseDivision'
					control={control}
					render={({ field }) => (
						<SelectC
							options={[]}
							values={field.value ? [{ value: field.value, label: field.value }] : []}
							label='Кейс / сделка'
							onChange={field.onChange}
							className={styles['main-info-SelectC']}
						/>
					)}
				/>

				<Controller
					name='sumOperationDivision'
					control={control}
					render={({ field }) => (
						<Input
							id='sumOperation'
							label='Сумма операции'
							extraLabel='RUB — Рубли РФ'
							value={field.value}
							onChange={(text) => field.onChange(text)}
							className={styles.sumInput}
							hasResetIcon={false}
							maxLength={35}
						/>
					)}
				/>

				<Controller
					name='counterpartyAccountDivision'
					control={control}
					render={({ field }) => (
						<SelectC
							options={[]}
							values={field.value ? [{ value: field.value, label: field.value }] : []}
							label='Счет контрагента'
							onChange={field.onChange}
							className={styles.addOperation__SelectC}
						/>
					)}
				/>

				<Controller
					name='articleDivision'
					control={control}
					render={({ field }) => (
						<SelectC
							options={[]}
							values={field.value ? [{ value: field.value, label: field.value }] : []}
							label='Статья / подстатья'
							onChange={field.onChange}
							className={styles['main-info-SelectC']}
						/>
					)}
				/>
			</div>

			<Button label='Закрыть форму деления' mode='secondary' className={styles.division_btn} />
		</form>
	)
}
