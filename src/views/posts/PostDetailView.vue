<template>
	<div>
		<h2>제목</h2>
		<p>내용</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEdit">수정</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger" @click="goDelete">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goListPage = () => {
	router.push({
		name: 'PostList',
	});
};const goListPage = () => {
	router.push({
		name: 'PostList',
	});
};const goListPage = () => {
	router.push({
		name: 'PostList',
	});
};
</script>

<style lang="scss" scoped></style>
