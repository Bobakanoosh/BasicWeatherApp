import { API } from "./config/axiosConfig.js";
import { config } from "dotenv";
import express from "express";
import { errorHandler } from "./middleware/errorHandler.middleware.js";
import { AxiosError } from "axios";
import cors from "cors";

config();

const app = express();
const port = 4000;

app.use(cors());

app.get("/v1/location/search", async (req, res, next) => {
	try {
		const response = await API.get("/locations/v1/cities/autocomplete", {
			params: {
				q: req.query.q,
				apikey: process.env.ACCUWEATHER_API_KEY,
			},
		});

		res.status(200).send(response.data);
	} catch (e) {
		const err = new Error("Error processing request");
		console.error(e);
		next(err);
	}
});

app.get("/v1/forecast/daily/", (req, res, next) => {
	res.status(400);
	next(new Error("Missing location parameter"));
	return;
});

app.get("/v1/forecast/daily/:location", async (req, res, next) => {
	try {
		const response = await API.get(`/forecasts/v1/daily/5day/${req.params.location}`, {
			params: {
				apikey: process.env.ACCUWEATHER_API_KEY,
			},
		});

		res.status(200).send(response.data);
	} catch (e) {
		if ((e as AxiosError).response?.data?.Message?.includes("LocationKey is invalid")) {
			res.status(400);
			next(new Error("Location key provided is invalid: " + req.params.location));
			return;
		}

		const err = new Error("Error processing request");
		next(err);
	}
});

app.listen(port, () => {
	console.log(`API deployed http://localhost:${port}`);
});

app.use(errorHandler);
