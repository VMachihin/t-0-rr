import { IOperationsData } from '@/features/operations/configs/operationsTypes'

export const operationsData: IOperationsData[] = [
	{
		id: '1',
		date: '23.03.2025',
		iconType: 'minus',
		organization: 'ИП Тедорадзе А.С. 2558, Сбер 9042',
		counterparty:
			'1 ФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО) (7702070139) ФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО) (7702070139)',
		nameOperation: {
			id: '1',
			name: 'Пять платежей по договору № 07 от 07.10.2024 (ДС № 01, 02, 03, 04, 05) за выполнение подсобных работ',
		},
		caseAndDeal: 'Начальная Мурманск-22 НОВЫЙ',
		article: 'Заработная плата Выплата аванса 40%',
		amount: {
			status: 'negative',
			value: '-835 783 222.64',
		},
	},
	{
		id: '2',
		date: '23.03.2025',
		iconType: 'plus',
		organization: 'ИП Рога и копыта А.С. 2558, Сбер 9042',
		counterparty: '2 ФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО) (7702070139)',
		nameOperation: {
			id: '2',
			name: 'Шесть платежей по договору № 07 от 07.10.2024 (ДС № 01, 02, 03, 04, 05) за выполнение подсобных работ',
		},
		caseAndDeal: 'Начальная Мурманск-22 НОВЫЙ',
		article: 'Заработная плата Выплата аванса 40%',
		amount: {
			status: 'positive',
			value: '+835 783 222.64',
		},
	},
	{
		id: '3',
		date: '23.03.2025',
		iconType: 'round',
		organization: 'ИП Пирожков А.С. 2558, Сбер 9042',
		counterparty: '3 ФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО) (7702070139)',
		nameOperation: {
			id: '3',
			name: 'Один платеж по договору № 07 от 07.10.2024 (ДС № 01, 02, 03, 04, 05) за выполнение подсобных работ',
		},
		caseAndDeal: 'Начальная Мурманск-22 НОВЫЙ',
		article: 'Заработная плата Выплата аванса 40%',
		amount: {
			status: 'neutral',
			value: '835 783 222.64',
		},
	},
	{
		id: '4',
		date: '23.03.2025',
		iconType: 'plus',
		organization: 'ИП Пирожков А.С. 2558, Сбер 9042',
		counterparty: '3 ФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО) (7702070139)',
		nameOperation: {
			id: '4',
			name: 'Два платежа по договору № 07 от 07.10.2024 (ДС № 01, 02, 03, 04, 05) за выполнение подсобных работ',
		},
		caseAndDeal: 'Начальная Мурманск-22 НОВЫЙ',
		article: 'Заработная плата Выплата аванса 40%',
		amount: {
			status: 'positive',
			value: '+835 783 222.64',
		},
	},
]
