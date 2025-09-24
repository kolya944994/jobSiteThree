import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<div className={styles.containerHeader}>
			<nav className={styles.containerNav}>
				<div className={styles.logo}>
					<Link to='/' className={styles.linkLogo}>
						<img src={logo} alt='Логотип Hh' />
						<h3 className={styles.textLogo}>.FrontEnd</h3>
					</Link>
				</div>
				<div className={styles.headerMenu}>
					<a href=''>
						<h4 className={styles.jobText}>Вакансии FE</h4>
					</a>

					<a href='/'>
						<h4 className={styles.aboutMe}>Обо мне</h4>
					</a>
				</div>
				<div></div>
			</nav>
		</div>
	)
}

export default Header
