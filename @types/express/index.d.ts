declare namespace Express {
	export interface Request {
		log: (message: string | Error) => void;
	}
}
