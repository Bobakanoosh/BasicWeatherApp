<script setup lang="ts">
import LocationSearch from "./components/LocationSearch.vue";
import SunIcon from "./components/icons/SunIcon.vue";
import Forecasts from "./components/Forecasts.vue";
</script>

<template>
	<div class="flex flex-col mt-16 items-center w-full h-full">
		<div class="flex flex-col items-start flex-grow h-full">
			<div class="flex items-end mb-4">
				<h1 class="text-5xl font-thin mr-4">Weather App</h1>
				<SunIcon class="text-amber-400 text-4xl" />
			</div>
			<p class="text-lg mb-4">View the weather anywhere in the world!</p>
			<div class="mb-8">
				<LocationSearch />
			</div>
			<div class="flex-grow h-full">
				<Forecasts class="mt-4" />
			</div>
		</div>
	</div>
</template>

<style></style>
