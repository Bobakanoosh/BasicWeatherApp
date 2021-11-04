import axios from "axios";

export const API = axios.create({
	baseURL: "http://dataservice.accuweather.com/",
});
