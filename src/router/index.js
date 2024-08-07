// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';

// routes - 페이지 컴포넌트에 대한 정보
const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	{
		// 세미콜론 포함 경로: 동적라우팅 (여러개의 url을 하나의 페이지 컴포넌트에 맵핑하고 싶을 때 사용 )
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
		//  파라미터가 해당 컴포넌트에 props형태로 전달 됨
		props: true,
		// props: { newsletterPopup: false } (정적 일 때 유효)
		// props: route => ({
		// 	id: parseInt(route.params.id),
		// 	// other: route.query ... 그외 쿼리 등 사용 가능
		// }),
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
	{
		path: '/nested',
		name: 'Nested',
		component: NestedView,
		children: [
			{
				path: '',
				name: 'NestedHome',
				component: NestedHomeView,
			},
			{
				path: 'one',
				name: 'NestedOne',
				component: NestedOneView,
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwoView,
			},
		],
	},
];

// router 객체 생성 - 페이지를 이동할 수 있게 도와주는 객체
const router = createRouter({
	history: createWebHistory('/'), //함수에서 생성된 반환 값
	routes,
});

export default router;
