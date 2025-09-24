import './App.css'
import Error404 from './components/error404/Error404'
import VacanciesList from './components/vacanciesList/VacanciesList'
import MainPage from './pages/mainPage/MainPage'
import VacancyPage, { vacancyLoader } from './pages/vacancyPage/VacancyPage'

import {
	Route,
	Navigate,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Navigate to='/vacancy/moscow' />} />
			<Route path='/vacancy' element={<MainPage />}>
				<Route index element={<Navigate to='moscow' replace />} />
				<Route path='moscow' element={<VacanciesList />} />
				<Route path='petersburg' element={<VacanciesList />} />
			</Route>
			<Route
				path='/vacancy/:id'
				element={<VacancyPage />}
				loader={vacancyLoader}
				errorElement={<Error404 />}
			/>
			<Route path='*' element={<Error404 />} />
		</>
	),
	{ basename: '/jobSiteTwo' }
)

function App() {
	return <RouterProvider router={router} />
}

export default App
