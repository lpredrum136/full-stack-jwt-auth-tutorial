import { useHelloQuery } from '../generated/graphql'

const Profile = () => {
	const { data, error, loading } = useHelloQuery({ fetchPolicy: 'no-cache' })

	if (loading) return <h3>Loading ....</h3>

	if (error)
		return <h3 style={{ color: 'red' }}>Error: {JSON.stringify(error)}</h3>

	return <h3>{data?.hello}</h3>
}

export default Profile
