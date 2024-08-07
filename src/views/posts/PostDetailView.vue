<template>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p>{{ post.createdAt }}</p>
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
				<button class="btn btn-outline-danger" @click="delPost">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { getPostById, deletePost } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 라우터로 받는 파라미터를 props로 전달받기
const props = defineProps({
	id: String,
});

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
 * (객체 내부에서 프로퍼티 값만 변경은 가능하다. post.value.title = res.title ...)
 */
const post = ref({});
// let post = reactive({});
const fetchPost = () => {
	getPostById(props.id)
		.then(res => {
			// post.value = { ...res.data };
			setPost(res.data);
		})
		.catch(err => console.log('error: ', err));
};
fetchPost();
const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};
const delPost = async () => {
	try {
		// 안티패턴 줄이기 !confirm 대신 === false 표기/ if문의 depth를 깊어지지 않게 방지
		if (confirm('삭제하시겠습니까?') === false) {
			return;
		}
		await deletePost(props.id);
		alert('삭제가 완료되었습니다.');
		router.push({
			name: 'PostList',
		});
	} catch (error) {
		console.log('error: ', error);
	}
};
</script>

<style lang="scss" scoped></style>
