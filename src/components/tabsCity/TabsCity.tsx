import { Tabs } from '@mantine/core'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTypedDispatch } from '../../hooks/redux'
import { setArea } from '../../reducers/MainPageHhSlice'

function CityTabs() {
	const dispatch = useTypedDispatch()

	const navigate = useNavigate()
	const location = useLocation()

	const current = location.pathname.includes('petersburg')
		? 'petersburg'
		: 'moscow'

	return (
		<Tabs
			value={current}
			onChange={value => {
				if (value) {
					navigate(`/vacancy/${value}`)
					dispatch(setArea(value === 'petersburg' ? 'spb' : 'moscow'))
				}
			}}
		>
			<Tabs.List>
				<Tabs.Tab value='moscow'>Москва</Tabs.Tab>
				<Tabs.Tab value='petersburg'>Санкт-Петербург</Tabs.Tab>
			</Tabs.List>
		</Tabs>
	)
}

export default CityTabs
