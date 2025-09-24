import { useLoaderData } from 'react-router-dom'
import Header from '../../components/header/Header'
import styles from './VacancyPage.module.css'
import VacancyCard from '../../ui/vacancyCard/VacancyCard'
import VacancyCardContent from '../../modules/vacancyCardContent/VacancyCardContent'

export async function vacancyLoader({ params }: { params: any }) {
	const res = await fetch(`https://api.hh.ru/vacancies/${params.id}`)
	if (!res.ok) {
		throw new Response('Not Found', { status: 404 })
	} else {
		return res.json()
	}
}

function VacancyPage() {
	const vacancy = useLoaderData()
	return (
		<div>
			<Header />
			<div className={styles.vacanciesListPosition}>
				{vacancy && (
					<>
						<VacancyCard>
							<VacancyCardContent
								vacancy={vacancy}
								isButton={false}
								isButtonText={false}
							/>
						</VacancyCard>
						<div>
							<VacancyCard>
								<h3>Компания</h3>
								<div
									className={styles.vacancyDescription}
									dangerouslySetInnerHTML={{ __html: vacancy.description }}
								/>
							</VacancyCard>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default VacancyPage
