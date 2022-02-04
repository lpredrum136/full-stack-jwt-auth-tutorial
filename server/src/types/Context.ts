import { Request, Response } from 'express'
import { UserAuthPayload } from './UserAuthPayload'

export interface Context {
	req: Request
	res: Response
	user: UserAuthPayload
}
