import { Request, Response } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: Function) => {
	const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
	res.status(statusCode);

	if (typeof err === "string") {
		err = { message: err };
	}

	let resJson: any = {
		message: err.message,
		status: statusCode,
	};

	if (process.env.NODE_ENV !== "production") {
		resJson.stack = err.stack;
	}

	res.json(resJson);
};
