export interface IRow {
	id: string
	date: string
	iconType: string
	organization: string
	counterparty: string
	nameOperation: string
	caseAndDeal: string
	article: string
	amount: string
	checkbox: ''
}

export const rowData: IRow[] = [
	{
		id: '367800',
		date: '23.03.2025',
		iconType: '',
		organization: 'ИП Тедорадзе А.С. 2558, Сбер 9042',
		counterparty:
			'1 ФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО) (7702070139) ФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО) (7702070139)',
		nameOperation:
			'Пять платежей по договору № 07 от 07.10.2024 (ДС № 01, 02, 03, 04, 05) за выполнение подсобных работ',
		caseAndDeal: 'Начальная Мурманск-22 НОВЫЙ',
		article: 'Заработная плата Выплата аванса 40%',
		amount: '- 835 783 222.64',
		checkbox: '',
	},
	{
		id: '367800',
		date: '23.03.2025',
		iconType: '',
		organization: 'ИП Тедорадзе А.С. 2558, Сбер 9042',
		counterparty: '2 ФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО) (7702070139)',
		nameOperation:
			'Пять платежей по договору № 07 от 07.10.2024 (ДС № 01, 02, 03, 04, 05) за выполнение подсобных работ',
		caseAndDeal: 'Начальная Мурманск-22 НОВЫЙ',
		article: 'Заработная плата Выплата аванса 40%',
		amount: '- 835 783 222.64',
		checkbox: '',
	},
	{
		id: '367800',
		date: '23.03.2025',
		iconType: '',
		organization: 'ИП Тедорадзе А.С. 2558, Сбер 9042',
		counterparty: '3 ФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО) (7702070139)',
		nameOperation:
			'Пять платежей по договору № 07 от 07.10.2024 (ДС № 01, 02, 03, 04, 05) за выполнение подсобных работ',
		caseAndDeal: 'Начальная Мурманск-22 НОВЫЙ',
		article: 'Заработная плата Выплата аванса 40%',
		amount: '- 835 783 222.64',
		checkbox: '',
	},
]
