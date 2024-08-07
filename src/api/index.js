import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create(Object.assign({ baseURL }, options));

	// const instance = axios.create({
	// 	baseURL,
	// 	...options,
	// });
	return instance;
}

const baseURL = 'http://localhost:5000/posts';
export const posts = create(baseURL);
