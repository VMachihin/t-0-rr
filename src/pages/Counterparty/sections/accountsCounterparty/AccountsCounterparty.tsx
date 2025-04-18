import { CardCounterparty } from '@/widgets/CardCounterparty'
import { Badge } from '@/shared/ui/Badge'

import styles from './accountsCounterparty.module.scss'

export const AccountsCounterparty = () => {
	const invoiceCounter = '5' /* будем получать динамически*/

	return (
		<section className={styles.accountsCounterparty}>
			<div className={styles.inner}>
				<h3 className={styles.title}>Счета контрагента</h3>
				<Badge mode='default' label={invoiceCounter} className={styles.badge} />
			</div>

			<ul className={styles.list}>
				<CardCounterparty />
			</ul>
		</section>
	)
}
