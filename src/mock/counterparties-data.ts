import { ICounterpartiesData } from '@/shared/types/counterpartiesData'

export const counterpartiesData: ICounterpartiesData[] = [
	{
		id: '11',
		shortName: 'МЦАИ ООО',
		fullName: {
			path: 'counterparty',
			label:
				'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МЕЖРЕГИОНАЛЬНЫЙ ЦЕНТР АРХЕОЛОГИЧЕСКИХ ИССЛЕДОВАНИЙ"',
		},
		type: 'Юридическое лицо',
		inn: '6829143499',
		accounts: ['4803', 'Сбер8594', 'МЦАИ 0700'],
		reputation: {
			status: 'positive',
			value: 'надежный',
		},
	},
	{
		id: '12',
		shortName: 'Иванов Ф. Е.',
		fullName: {
			path: 'counterparty',
			label: 'ИВАНОВ Федор Евгеньевич',
		},
		type: 'Юридическое лицо',
		inn: '6829143499',
		accounts: ['4803', 'Сбер8594', 'МЦАИ 0700'],
		reputation: {
			status: 'negative',
			value: 'проблемный',
		},
	},
	{
		id: '13',
		shortName: 'МЦАИ ООО',
		fullName: {
			path: 'counterparty',
			label:
				'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МЕЖРЕГИОНАЛЬНЫЙ ЦЕНТР АРХЕОЛОГИЧЕСКИХ ИССЛЕДОВАНИЙ"',
		},
		type: 'Юридическое лицо',
		inn: '6829143499',
		accounts: ['4803', 'Сбер8594', 'МЦАИ 0700'],
		reputation: {
			status: 'warning',
			value: 'сомнительный',
		},
	},
]
