import { posts } from '.';

// import axios from 'axios';

export async function getPosts(params) {
	return await posts.get('/', { params });
}
export function getPostById(id) {
	return posts.get(id);
}
export function createdPost(data) {
	return posts.post('', data);
}
export function updatePost(id, data) {
	return posts.put(id, data);
}
export function deletePost(id) {
	return posts.delete(`/${id}`);
}
