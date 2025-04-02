import { useModal } from '@/hooks/useModal'

import { ListLayout } from '@/layouts/ListLayout'
import { Modal } from '@/shared/ui/Modal'
import { GridTable } from '@/shared/ui/GridTable'
import { NewOrganization } from '@/components/Forms/NewOrganization/NewOrganization'

import { organizationDef } from '@/features/table/configs/organizationDef'
import { organizationsData } from '@/mock/organizations-data'
import { organizationsTotalInfo } from '@/mock/organizations-total-info'

export const Organizations = () => {
	const { buttonId } = useModal()

	return (
		<ListLayout title='Организации' totalInfoData={organizationsTotalInfo}>
			<GridTable columnDefinitions={organizationDef} rowData={organizationsData} />

			{/* модалки */}
			{buttonId === 'add' && (
				<Modal title='Новая организация'>
					<NewOrganization />
				</Modal>
			)}

			{buttonId === 'unload' && (
				<Modal title='Выгрузка (экспорт) организаций'>Выгрузка организаций</Modal>
			)}
		</ListLayout>
	)
}
