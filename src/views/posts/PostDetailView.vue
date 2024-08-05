<template>
	<div>
		<h2>{{ form.title }}</h2>
		<p>{{ form.content }}</p>
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
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { getPostById } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 라우터로 받는 파라미터를 props로 전달받기
const props = defineProps({
	id: Number,
});
console.log('props: ', props);

// const route = useRoute();
const router = useRouter();

const goListPage = () => {
	router.push({
		name: 'PostList',
	});
};

// const id = route.params.id;
const goEditPage = () => {
	router.push({
		name: 'PostEdit',
		params: { id: props.id },
	});
};

/**
 * ref: 객체 할당 가능
 * (각 객체 내부 프로퍼티 값마다 변경은 불가능)
 *
 * reactive: 객체 재할당 불가능
 * (객체 내부에서 프로퍼티 값만 변경은 가능하다. form.value.title = res.title ...)
 */
const form = ref({});
// let form = reactive({});
const fetchPost = () => {
	const data = getPostById(props.id);
	form.value = { ...data };
};
fetchPost();
</script>

<style lang="scss" scoped></style>
