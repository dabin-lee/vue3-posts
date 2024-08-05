<template>
	<AppCardVue>
		<h5 class="card-title">{{ title }}</h5>
		<p class="card-text">{{ content }}</p>
		<p class="text-muted">{{ createdAt }}</p>
	</AppCardVue>
</template>

<script setup>
import AppCardVue from '../AppCard.vue';

defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	createdAt: {
		type: [String, Number],
		required: true,
	},
});
</script>

<style lang="scss" scoped></style>
