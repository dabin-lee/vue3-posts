const posts = [
	{
		id: 1,
		title: '제목1',
		content: 'hello1',
		createdAt: '2024-01-01',
	},
	{
		id: 2,
		title: '제목2',
		content: 'hello2',
		createdAt: '2024-02-02',
	},
	{
		id: 3,
		title: '제목3',
		content: 'hello3',
		createdAt: '2024-03-03',
	},
	{
		id: 4,
		title: '제목4',
		content: 'hello4',
		createdAt: '2024-04-04',
	},
	{
		id: 5,
		title: '제목5',
		content: 'hello5',
		createdAt: '2024-05-05',
	},
	{
		id: 6,
		title: '제목6',
		content: 'hello6',
		createdAt: '2024-06-06',
	},
];

export function getPosts() {
	return posts;
}
