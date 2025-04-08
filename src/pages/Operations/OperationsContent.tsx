import { useModal } from '@/features/modal/hooks/useModal'
import { FilterOperations } from '@/features/operations/filterOperations'
import { NewOperation } from '@/features/operations/newOperation'
import { UnloadingOperations } from '@/features/operations/unloadingOperations'
import { UploadingOperations } from '@/features/operations/uploadingOperations'
import { SettingsListOperations } from '@/features/operations/settingsListOperations'
import { ProcessingOperation } from '@/features/operations/processingOperation'
import { operationsDef } from '@/features/operations/table/config/operationsDef'

import { ListLayout } from '@/shared/layouts/ListLayout'
import { GridTable } from '@/shared/ui/GridTable'
import { FiltersMenu } from '@/shared/ui/FiltersMenu'
import { Modal } from '@/shared/ui/Modal'

// моки
import { operationsTotalInfo } from '@/mock/operations-total-info'
import { operationsData } from '@/mock/operations-data'

const OperationsContent = () => {
	const { buttonId } = useModal()

	return (
		<ListLayout title='Операции' totalInfoData={operationsTotalInfo}>
			<FiltersMenu>
				<FilterOperations />
			</FiltersMenu>

			<GridTable rowData={operationsData} columnDefinitions={operationsDef} />

			{buttonId === 'add' && (
				<Modal title='Новая операция'>
					<NewOperation />
				</Modal>
			)}

			{buttonId === 'import' && (
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

			{buttonId.includes('processing') && (
				<Modal title='Обработка операции'>
					<ProcessingOperation />
				</Modal>
			)}
		</ListLayout>
	)
}

export default OperationsContent
