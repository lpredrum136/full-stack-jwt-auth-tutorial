import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../generated/graphql'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const [login, _] = useLoginMutation()

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const response = await login({
			variables: { loginInput: { username, password } }
		})

		if (response.data?.login.success) {
			console.log('ACCESS TOKEN', response.data.login.accessToken)
			navigate('..')
		} else {
			console.log('ERROR', response.data?.login.message)
		}
	}

	return (
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
	)
}

export default Login
