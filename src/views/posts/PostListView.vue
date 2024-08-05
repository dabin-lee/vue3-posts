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
		<!-- paging -->
		<nav class="mt-5" aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				<li class="page-item" :class="{ disabled: !(params._page > 1) }">
					<a
						class="page-link"
						href="#"
						aria-label="Previous"
						@click.prevent="--params._page"
					>
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li
					v-for="page in pageCount"
					:key="page"
					class="page-item"
					:class="{ active: page === params._page }"
				>
					<a class="page-link" href="#" @click.prevent="params._page = page">{{
						page
					}}</a>
				</li>
				<li
					class="page-item"
					:class="{ disabled: !(params._page < pageCount) }"
				>
					<a
						class="page-link"
						href="#"
						aria-label="Next"
						@click.prevent="++params._page"
					>
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
		<hr class="my-5" />
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
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import AppCardVue from '@/components/AppCard.vue';

const router = useRouter();
const posts = ref([]);
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 3, //현재 보여질 페이지
	_limit: 3, //페이지에 보여질 총 글 갯수
});
// pagination
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / `${params.value._limit}`),
);

const fetchPosts = async () => {
	try {
		// ({ data: posts.value } = await getPosts());
		const { data, headers } = await getPosts(params.value);
		posts.value = data;
		totalCount.value = headers[`x-total-count`];
	} catch (error) {
		console.log('error: ', error);
	}
};
// fetchPosts();
//반응형 데이터 변경 감지 -> 콜백 함수 다시 실행
watchEffect(fetchPosts);

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
