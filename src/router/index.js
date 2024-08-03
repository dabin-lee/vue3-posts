// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';

// routes - 페이지 컴포넌트에 대한 정보
const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
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
		name: 'postDetail',
		component: PostDetailView,
	},
	{
		path: '/posts/:id/edit',
		name: 'postEdit',
		component: PostEditView,
	},
];

// router 객체 생성 - 페이지를 이동할 수 있게 도와주는 객체
const router = createRouter({
	history: createWebHistory('/'), //함수에서 생성된 반환 값
	routes,
});

export default router;
