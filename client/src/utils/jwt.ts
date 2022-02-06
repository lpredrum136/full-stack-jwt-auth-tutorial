const JWTManager = () => {
	let inMemoryToken: string | null = null

	const getToken = () => inMemoryToken

	const setToken = (accessToken: string) => {
		inMemoryToken = accessToken
	}

	return { getToken, setToken }
}

export default JWTManager()
