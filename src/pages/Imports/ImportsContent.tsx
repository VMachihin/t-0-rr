import { importsDef } from '@/features/imports/table/configs/importsDef'
import { useQuickFilter } from '@/features/quickFilter/hooks/useQuickFilter'

import { ListLayout } from '@/shared/layouts/ListLayout'
import { GridTable } from '@/shared/ui/GridTable'
//
import { importsData } from '@/mock/imports-data'
//

const ImportsContent = () => {
  const { value } = useQuickFilter()

  return (
    <ListLayout
      title='Импорты'
      totalInfoData={[
        {
          name: 'Всего импортов',
          value: '24',
        },
      ]}
    >
      <GridTable
        columnDefinitions={importsDef}
        rowData={importsData}
        quickFilterText={value}
        checkboxHidden={false}
      />
    </ListLayout>
  )
}

export default ImportsContent
