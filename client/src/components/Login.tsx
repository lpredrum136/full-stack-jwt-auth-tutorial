import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import { useLoginMutation } from '../generated/graphql'
import JWTManager from '../utils/jwt'

const Login = () => {
	const { setIsAuthenticated } = useAuthContext()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const [login, _] = useLoginMutation()

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const response = await login({
			variables: { loginInput: { username, password } }
		})

		if (response.data?.login.success) {
			JWTManager.setToken(response.data.login.accessToken as string)
			setIsAuthenticated(true)
			navigate('..')
		} else {
			if (response.data?.login.message) setError(response.data.login.message)
		}
	}

	return (
		<>
			{error && <h3 style={{ color: 'red' }}>{error}</h3>}
			<form style={{ marginTop: '1rem' }} onSubmit={onSubmit}>
				<input
					type='text'
					value={username}
					placeholder='Username'
					onChange={event => setUsername(event.target.value)}
				/>
				<input
					type='password'
					value={password}
					placeholder='Password'
					onChange={event => setPassword(event.target.value)}
				/>
				<button type='submit'>Login</button>
			</form>
		</>
	)
}

export default Login
