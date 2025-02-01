import { MovieType } from '@/shared/api/types';

export const MOVIES_EXAMPLE_DATA: MovieType[] = [
	{
		id: 1,
		link: 'https://example.com/movie1',
		title: {
			ru: 'Звездные приключения',
			eng: 'Star Adventures',
			original: 'Star Adventures',
		},
		cover_link: 'https://example.com/covers/movie1.jpg',
		cover_title_link: 'https://example.com/covers/title_movie1.jpg',
		rating: '8.5',
		year: 2022,
		genres: [
			{ id: 1, label: 'Фантастика', link: 'https://example.com/genre/sci-fi' },
			{
				id: 2,
				label: 'Приключения',
				link: 'https://example.com/genre/adventure',
			},
		],
		time: '2 часа 10 минут',
		teaserDescription: 'Галактическое путешествие к неизведанным мирам.',
		description:
			'Команда храбрых героев отправляется в космос на поиски приключений и ответов на вечные вопросы.',
		filmCreator: [
			{ id: 1, filmCreator: 'Иван Иванов' },
			{ id: 2, filmCreator: 'Сергей Петров' },
		],
		actors: [
			{ id: 1, link: 'https://example.com/actor/1', name: 'Тимофей Соколов' },
			{ id: 2, link: 'https://example.com/actor/2', name: 'Анна Морозова' },
		],
		country: [
			{ id: 1, country: 'Россия' },
			{ id: 2, country: 'США' },
		],
		quality: [
			{ id: 1, quality: { quality: '1080p', label: 'Full HD' } },
			{ id: 2, quality: { quality: '720p', label: 'HD' } },
		],
	},
	{
		id: 2,
		link: 'https://example.com/movie2',
		title: {
			ru: 'Тайна пустыни',
			eng: 'Desert Mystery',
			original: 'Desert Mystery',
		},
		cover_link: 'https://example.com/covers/movie2.jpg',
		cover_title_link: 'https://example.com/covers/title_movie2.jpg',
		rating: '7.2',
		year: 2021,
		genres: [
			{ id: 1, label: 'Детектив', link: 'https://example.com/genre/detective' },
			{ id: 2, label: 'Триллер', link: 'https://example.com/genre/thriller' },
		],
		time: '1 час 55 минут',
		teaserDescription: 'Старый свиток раскрывает тайну забытого племени.',
		description:
			'Археологи отправляются в пустыню, чтобы раскрыть загадку древнего артефакта. Но их ждет нечто большее...',
		filmCreator: [
			{ id: 1, filmCreator: 'Дмитрий Иванов' },
			{ id: 2, filmCreator: 'Ольга Семенова' },
		],
		actors: [
			{
				id: 1,
				link: 'https://example.com/actor/3',
				name: 'Екатерина Лобанова',
			},
			{ id: 2, link: 'https://example.com/actor/4', name: 'Алексей Жуков' },
		],
		country: [{ id: 1, country: 'Россия' }],
		quality: [{ id: 1, quality: { quality: '720p', label: 'HD' } }],
	},
	{
		id: 3,
		link: 'https://example.com/movie3',
		title: {
			ru: 'Зов океана',
			eng: 'Call of the Ocean',
			original: 'Call of the Ocean',
		},
		cover_link: 'https://example.com/covers/movie3.jpg',
		cover_title_link: 'https://example.com/covers/title_movie3.jpg',
		rating: '6.9',
		year: 2020,
		genres: [
			{ id: 1, label: 'Драма', link: 'https://example.com/genre/drama' },
			{
				id: 2,
				label: 'Приключения',
				link: 'https://example.com/genre/adventure',
			},
		],
		time: '2 часа',
		teaserDescription:
			'История капитана, потерявшего все, кроме своей верности морю.',
		description:
			'Капитан корабля отправляется в последнее плавание, чтобы узнать себя и восстановить семейную связь.',
		filmCreator: [{ id: 1, filmCreator: 'Пётр Николаев' }],
		actors: [
			{ id: 1, link: 'https://example.com/actor/5', name: 'Андрей Смирнов' },
			{ id: 2, link: 'https://example.com/actor/6', name: 'Мария Коваленко' },
		],
		country: [{ id: 1, country: 'Россия' }],
		quality: [
			{ id: 1, quality: { quality: '576p', label: 'SD' } },
			{ id: 2, quality: { quality: '1080p', label: 'Full HD' } },
		],
	},
	// Продолжаем в том же стиле для оставшихся 17 фильмов
];
