import { JwtPayload } from 'jsonwebtoken'

export type UserAuthPayload = JwtPayload & {
	userId: number
	tokenVersion: number
}
