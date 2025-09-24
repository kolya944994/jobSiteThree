import { Link } from 'react-router-dom'

import VacancyCard from '../../ui/vacancyCard/VacancyCard'
import Header from '../header/Header'
import styles from './Error404.module.css'

import sadCat from '../../assets/sadCat.jpg'

function Error404() {
	return (
		<div className={styles.containerError404}>
			<Header />
			<div className={styles.positionCardError404}>
				<VacancyCard>
					<div className={styles.allPositionCard}>
						<div className={styles.containerTextAndButton}>
							<div className={styles.containerText}>
								<h1 style={{ marginBottom: 0 }}>
									УПС! ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ
								</h1>
								<p style={{ marginTop: 7 }}>Давайте перейдем к началу.</p>
							</div>
							<div className={styles.containerButton}>
								<Link to='/vacancy' className={styles.on}>
									На главную
								</Link>
							</div>
						</div>
						<div className={styles.containerImg}>
							<img src={sadCat} alt='Кот' className={styles.img} />
						</div>
					</div>
				</VacancyCard>
			</div>
		</div>
	)
}

export default Error404
