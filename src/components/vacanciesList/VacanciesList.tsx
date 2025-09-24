import VacancyCard from '../../ui/vacancyCard/VacancyCard'
import { useTypedSelector } from '../../hooks/redux'
import styles from './VacanciesList.module.css'

import VacancyCardContent from '../../modules/vacancyCardContent/VacancyCardContent'

function VacanciesList() {
	const { vacancies } = useTypedSelector(s => s.MainPageHhReducer)

	return (
		<div>
			<div className={styles.vacanciesList}>
				{vacancies.map(cur => (
					<VacancyCard key={cur.id} className={styles.containerVacancyCard}>
						<VacancyCardContent vacancy={cur} />
					</VacancyCard>
				))}
			</div>
		</div>
	)
}

export default VacanciesList
