import { memo } from 'react'
import { type ColDef } from 'ag-grid-community'
import { ICasesData } from './casesTypes'

import { CellLinkName } from '../cells/CellLinkName'
import { CellLinkOrganizations } from '../cells/CellLinkOrganizations'
import { CellBadge } from '../cells/cellBadge/CellBadge'

export const casesDef: ColDef<ICasesData>[] = [
	{ field: 'id', headerName: 'ID', minWidth: 60, maxWidth: 60 },
	{ field: 'name', headerName: 'Название кейса', cellRenderer: memo(CellLinkName), flex: 2 },
	{
		field: 'organizations',
		headerName: 'Организации',
		cellRenderer: memo(CellLinkOrganizations),
		flex: 2,
	},
	{ field: 'transactions', headerName: 'Сделок' },
	{ field: 'operations', headerName: 'Операций' },
	{
		field: 'balanceCase',
		headerName: 'Баланс кейса',
		cellRenderer: memo(CellBadge),
		valueFormatter: (params) => (params.value === null ? '' : params.value.value),
		cellStyle: { display: 'flex', justifyContent: 'start', alignItems: 'center' },
	},
]
