import { API } from "./api";
import { Forecast, Location } from "./api.types";

export async function searchLocation(q: string) {
	return API.get<Location[]>("/v1/location/search", {
		params: {
			q,
		},
	});
}

export async function getForecast(location: string) {
	return API.get<Forecast>(`/v1/forecast/daily/${location}`);
}
