import { useModal } from '@/hooks/useModal'

import { columnDefOperations } from '@/helpers/configTableOperations/columnDefOperations'

import { PageLayout } from '@/layouts/PageLayout'
import { GridTable } from '@/components/GridTable'
import { Modal } from '@/components/Modal'
import { NewOperation } from '@/components/Forms/NewOperation'
import { UnloadingOperations } from '@/components/Forms/UnloadingOperations'
import { UploadingOperations } from '@/components/Forms/UploadingOperations'
import { SettingsListOperations } from '@/components/Forms/SettingsListOperations'

import { operationsTotalInfo } from '@/mock/operations-total-info'
import { operationsData } from '@/mock/operations-data'

export const Operations = () => {
	const { buttonId } = useModal()

	return (
		<PageLayout title='Операции' totalInfoData={operationsTotalInfo}>
			<GridTable rowData={operationsData} columnDefinitions={columnDefOperations} />

			{/* модалки */}
			{buttonId === 'add' && (
				<Modal title='Новая операция'>
					<NewOperation />
				</Modal>
			)}

			{buttonId === 'upload' && (
				<Modal title='Загрузка (импорт) операций'>
					<UploadingOperations labelBadge='В этой форме производится массовая загрузка (импорт) операций из файла' />
				</Modal>
			)}

			{buttonId === 'unload' && (
				<Modal title='Выгрузка (экспорт) операций'>
					<UnloadingOperations labelBadge='В этом окне Вы можете выгрузить необходимые Вам операции, предварительно настроив список' />
				</Modal>
			)}

			{buttonId === 'settings' && (
				<Modal title='Настройки списка операций'>
					<SettingsListOperations />
				</Modal>
			)}
		</PageLayout>
	)
}
