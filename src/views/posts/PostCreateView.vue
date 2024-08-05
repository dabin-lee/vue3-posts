<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />

		<form @submit.prevent>
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input
					v-model="form.title"
					type="text"
					class="form-control"
					id="title"
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea
					v-model="form.content"
					class="form-control"
					id="content"
					rows="3"
				></textarea>
			</div>

			<div class="mb-3">
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>
				<button type="button" class="btn btn-primary" @click="save">
					저장
				</button>
				<!-- <button @click="toastTest">toastTest</button> -->
			</div>
		</form>
	</div>
	<!-- {{ showToast.show }} -->
	<!-- <ToastAlert v-if="showToast.show" :message="showToast.msg"></ToastAlert> -->
</template>

<script setup>
import { createdPost } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
// import ToastAlert from '../../components/ToastAlert.vue';

const form = ref({
	title: null,
	content: null,
});
const router = useRouter();

const goListPage = () => {
	router.push({
		name: 'PostList',
	});
};

// const showToast = ref({
// 	msg: '',
// 	show: false,
// });
// const toastTest = () => {
// 	showToast.value.msg = '메세지입니다.';
// 	showToast.value.show = true;
// };

const save = () => {
	try {
		const data = {
			...form.value,
			createdAt: dayjs().format('YYYY-MM-DD'),
		};
		createdPost(data);
		alert('등록이 되었습니다.');
		router.go(-1);
	} catch (error) {
		alert('등록할 수 없습니다.');
	}
};
</script>

<style lang="scss" scoped></style>
