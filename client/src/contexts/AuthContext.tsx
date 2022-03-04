import {
	useState,
	Dispatch,
	SetStateAction,
	createContext,
	ReactNode
} from 'react'
import JWTManager from '../utils/jwt'

interface IAuthContext {
	isAuthenticated: boolean
	setIsAuthenticated: Dispatch<SetStateAction<boolean>>
	checkAuth: () => Promise<void>
}

const defaultIsAuthenticated = false

export const AuthContext = createContext<IAuthContext>({
	isAuthenticated: defaultIsAuthenticated,
	setIsAuthenticated: () => {},
	checkAuth: () => Promise.resolve()
})

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(defaultIsAuthenticated)

	const checkAuth = async () => {
		const token = JWTManager.getToken()

		if (token) setIsAuthenticated(true)
		else {
			const success = await JWTManager.getRefreshToken()
			if (success) setIsAuthenticated(true)
		}
	}

	const authContextData = {
		isAuthenticated,
		setIsAuthenticated,
		checkAuth
	}

	return (
		<AuthContext.Provider value={authContextData}>
			{children}{' '}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
