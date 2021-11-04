<script setup lang="ts">
import { searchLocation } from "./api/api.service";

const search = ref<string>();
const error = ref<string>();

function submitSearch() {
	if (!search.value) {
		error.value = "Invalid input";
		return;
	}

	if (search.value) {
		searchLocation(search.value).then(({ data: location }) => {
			console.log(location);
		});
	}
}
</script>

<template>
	<div class="mt-16 flex flex-col items-center justify-center w-full">
		<h1>Weather App</h1>
		<div class="flex">
			<input v-model="search" type="text" placeholder="Location" />
			<button @click="submitSearch">Search</button>
		</div>
	</div>
</template>

<style></style>
