<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />

		<form @submit.prevent="edit">
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input
					v-model="post.title"
					type="text"
					class="form-control"
					id="title"
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea
					v-model="post.content"
					class="form-control"
					id="content"
					rows="3"
				></textarea>
			</div>

			<div class="mb-3">
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					취소
				</button>
				<button
					type="button"
					class="btn btn-primary"
					@click.self.prevent="edit"
				>
					수정
				</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { getPostById, updatePost } from '@/api/posts';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const goDetailPage = () => {
	router.push({
		name: 'PostDetail',
		params: { id },
	});
};

const post = ref({
	title: null,
	content: null,
});

const fetchPost = async () => {
	try {
		const { data } = await getPostById(id);
		setPost(data);
	} catch (error) {
		console.log('error: ', error);
	}
};
fetchPost();

const edit = async () => {
	try {
		await updatePost(id, { ...post.value });
		router.push({ name: 'PostDetail', params: id });
	} catch (error) {
		console.log('error: ', error);
	}
};
const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};
</script>

<style lang="scss" scoped></style>
