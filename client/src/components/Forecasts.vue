<script setup lang="ts">
import { useState } from "../state/state";
import ForecastCard from "./ForecastCard.vue";

const { forecast, location } = useState();
</script>

<template>
	<div v-if="forecast" class="grid gap-y-4">
		<h1 v-if="location" class="text-3xl font-thin">{{ location.LocalizedName }}</h1>
		<div class="grid grid-flow-col gap-x-4">
			<ForecastCard
				v-for="daily in forecast.DailyForecasts.slice(0, 3)"
				:forecast="daily"
				class="w-48 h-full"
			/>
		</div>
	</div>
</template>
