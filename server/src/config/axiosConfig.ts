import axios from "axios";

export const API = axios.create({
	baseURL: "http://dataservice.accuweather.com/",
	params: {
		apikey: process.env.ACCUWEATHER_API_KEY,
	},
});
