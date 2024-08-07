import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create(Object.assign({ baseURL }, options));

	// const instance = axios.create({
	// 	baseURL,
	// 	...options,
	// });
	return instance;
}

const baseUrl = import.meta.env.VITE_APP_API_URL;
// console.log('baseUrl: ', `${baseUrl}/posts`);
// const baseURL = 'http://localhost:5000/posts';
export const posts = create(`${baseUrl}/posts`);
