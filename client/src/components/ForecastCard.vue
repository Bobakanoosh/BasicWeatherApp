<script setup lang="ts">
import { DailyForecast } from "../api/api.types";

const props = defineProps<{ forecast: DailyForecast }>();

const dayOfWeek = computed(() => {
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const idx = new Date(props.forecast.Date).getDay();
	return days[idx];
});
</script>

<template>
	<div class="grid gap-y-4 bg-light-300 rounded-lg p-4 shadow-md">
		<div>
			<h4
				class="
					font-semibold
					text-center text-xl
					mb-4
					bg-blue-500
					border-b border-b-blue-700
					-mx-4
					-my-4
					py-4
					rounded-t-lg
					text-white
					shadow-lg
				"
			>
				{{ dayOfWeek }}
			</h4>
			<div class="flex items-center">
				<div class="text-3xl flex">
					<p class="mr-2">{{ forecast.Temperature.Minimum.Value }}</p>
					<p class="text-true-gray-600 text-lg">F&deg;</p>
				</div>
				<span class="text-true-gray-200 text-4xl font-thin mx-2">/</span>
				<div class="text-3xl flex">
					<p class="mr-2">{{ forecast.Temperature.Maximum.Value }}</p>
					<p class="text-true-gray-600 text-lg">F&deg;</p>
				</div>
			</div>
		</div>
		<div class="daynight">
			<h6>Day</h6>
			<span>{{ forecast.Day.IconPhrase }}</span>
		</div>
		<div class="daynight">
			<h6>Night</h6>
			<span>{{ forecast.Day.IconPhrase }}</span>
		</div>
	</div>
</template>

<style scoped>
.daynight {
	@apply flex-col;
}

.daynight > h6 {
	@apply text-true-gray-400 font-bold text-sm;
}

.daynight > span {
	@apply text-lg;
}
</style>
