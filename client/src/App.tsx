import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import { useAuthContext } from './contexts/AuthContext'

function App() {
	const [loading, setLoading] = useState(true)
	const { checkAuth } = useAuthContext()

	useEffect(() => {
		const authenticate = async () => {
			await checkAuth()
			setLoading(false)
		}

		authenticate()
	}, [checkAuth])

	if (loading) return <h1>LOADING....</h1>
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='login' element={<Login />} />
						<Route path='register' element={<Register />} />
						<Route path='profile' element={<Profile />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
