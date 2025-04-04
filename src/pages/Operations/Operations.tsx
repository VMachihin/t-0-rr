import { useModal } from '@/features/modal/hooks/useModal'
import { FilterMenu } from '@/features/filtersMenu/components/FilterMenu'
import { NewOperation } from '@/features/operations/components/NewOperation'
import { UnloadingOperations } from '@/features/operations/components/UnloadingOperations'
import { UploadingOperations } from '@/features/operations/components/UploadingOperations'
import { SettingsListOperations } from '@/features/operations/components/SettingsListOperations'
import { ProcessingOperation } from '@/features/operations/components/ProcessingOperation'
import { operationsDef } from '@/features/operations/operationsTable/config/operationsDef'

import { ListLayout } from '@/layouts/ListLayout'
import { GridTable } from '@/shared/ui/GridTable'
import { Modal } from '@/shared/ui/Modal'

//
import { operationsTotalInfo } from '@/mock/operations-total-info'
import { operationsData } from '@/mock/operations-data'
//

export const Operations = () => {
	const { buttonId } = useModal()

	return (
		<ListLayout title='Операции' totalInfoData={operationsTotalInfo}>
			<FilterMenu />
			<GridTable rowData={operationsData} columnDefinitions={operationsDef} />

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

			{buttonId.includes('processing') && (
				<Modal title='Обработка операции'>
					<ProcessingOperation />
				</Modal>
			)}
		</ListLayout>
	)
}
