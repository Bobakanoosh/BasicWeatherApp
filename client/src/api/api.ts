import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL as string;

export const API = axios.create({
	baseURL: API_URL,
});
