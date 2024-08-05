<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post?.title"
					:content="post?.content"
					:created-at="post?.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>

		<hr class="my-4" />
		<AppCardVue>
			<!-- 컴포넌트 재활용/ router 의존성 분리 후 props값 내리기 test -->
			<ProductDetailView :id="1"></ProductDetailView>
		</AppCardVue>
	</div>
</template>

<script setup>
import ProductDetailView from './PostDetailView.vue';
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AppCardVue from '@/components/AppCard.vue';

const router = useRouter();
const posts = ref([]);

const fetchPosts = async () => {
	try {
		// ({ data: posts.value } = await getPosts());
		const { data } = await getPosts();
		posts.value = data;
	} catch (error) {
		console.log('error: ', error);
	}
};
fetchPosts();

const goPage = postId => {
	// router.push(`/posts/:${postId}`);
	router.push({
		name: 'PostDetail',
		params: {
			id: postId,
		},
		// query: {
		// 	searchText: 'hello',
		// },
		// hash: '#world',
	});
};
</script>

<style lang="scss" scoped></style>
