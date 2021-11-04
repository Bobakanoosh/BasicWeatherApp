<script setup lang="ts">
import { getForecast, searchLocation } from "../api/api.service";
import { Location } from "../api/api.types";
import { useState } from "../state/state";
import LocationCard from "./LocationCard.vue";

const state = useState();
const searchResults = ref<Location[]>([]);
const search = ref<string>();
const error = ref<string>();
const hide = ref<boolean>();

function submitSearch() {
	if (!search.value) {
		error.value = "You must enter a search query!";
		return;
	}

	if (search.value) {
		searchLocation(search.value).then(({ data: location }) => {
			searchResults.value = location;
			hide.value = false;
		});
	}
}

function viewLocation(location: Location) {
	error.value = "";
	getForecast(location.Key)
		.then(({ data: forecast }) => {
			hide.value = true;
			search.value = "";
			state.forecast.value = forecast;
			state.location.value = location;
		})
		.catch((e) => {
			error.value = "An error has occured, please try again later";
		});
}
</script>

<template>
	<div class="grid gap-y-4 w-xl">
		<div class="flex justify-between">
			<input
				type="text"
				placeholder="Search a location"
				v-model="search"
				@input="error = ''"
				class="
					w-full
					bg-light-300
					rounded-lg
					mr-4
					px-4
					border-1 border-light-500
					focus:(outline-none
					border-blue-600)
				"
			/>
			<button
				@click="submitSearch"
				class="
					px-6
					py-3
					rounded-lg
					bg-blue-500
					text-white
					hover:bg-blue-600
					active:bg-blue-700
					focus:outline-none
				"
			>
				Search
			</button>
		</div>
		<span v-if="error" class="text-red-500 font-semibold">{{ error }}</span>
		<div v-if="!hide" class="grid gap-y-4">
			<div v-for="location in searchResults" :key="location.Key">
				<LocationCard @click="viewLocation(location)" :location="location" />
			</div>
		</div>
	</div>
</template>
