<script setup lang="ts">
import { Location } from "../api/api.types";
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";

const props = defineProps<{ location: Location }>();
</script>

<template>
	<button
		class="
			bg-light-200
			rounded-lg
			px-8
			py-3
			flex
			justify-between
			items-center
			shadow-md
			drop-shadow-sm
			w-full
			rounded-lg
			border-b-2 border-transparent
			focus:outline-none
			hover:(text-blue-500
			bg-light-400
			border-b-light-900)
			active:text-blue-600
		"
	>
		<div class="mr-8 text-left">
			<h3 class="text-2xl font-semibold mb-2">
				{{ location.LocalizedName }}
			</h3>
			<div class="flex text-lg">
				<p>{{ location.AdministrativeArea.LocalizedName }}</p>
				<p class="mr-2">,</p>
				<p>{{ location.Country.LocalizedName }}</p>
			</div>
		</div>
		<div class="-mr-4 w-16 h-16 text-3xl flex items-center justify-center">
			<ArrowRightIcon />
		</div>
	</button>
</template>

<style scoped></style>
