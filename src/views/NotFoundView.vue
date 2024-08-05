<template>
	<div class="text-center py-5">
		<h1>Oops!</h1>
		<h2>404 Not Found</h2>
		<p class="text-muted">요청한 페이지를 찾을 수 없습니다.</p>
		<!-- <p>error link Path: {{ $route.params.pathMatch }}</p> -->
		<div class="mt-4">
			<RouterLink to="/">
				<button class="btn btn-primary">BACK HOME</button>
			</RouterLink>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
