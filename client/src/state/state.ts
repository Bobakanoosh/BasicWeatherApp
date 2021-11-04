import { Forecast, Location } from "../api/api.types";

const forecast = ref<Forecast>();
const location = ref<Location>();

export function useState() {
	return {
		forecast,
		location,
	};
}
