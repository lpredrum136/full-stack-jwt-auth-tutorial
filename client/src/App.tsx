import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'

function App() {
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
