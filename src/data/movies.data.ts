import { MovieType } from '@/types/movie.types';

export const MOVIES_EXAMPLE_DATA: MovieType[] = [
	{
		id: 1,
		link: '/movie/1',
		title: {
			ru: 'Побег из Шоушенка',
			eng: 'The Shawshank Redemption',
			original: 'The Shawshank Redemption',
		},
		cover_title_link: '/images/movies/1.jpg',
		rating: '9.3',
		year: 1994,
		genres: [
			{ id: 1, genreTitle: 'Драма' },
			{ id: 2, genreTitle: 'Криминал' },
		],
		time: '142 мин',
		teaserDescription: 'История надежды и свободы.',
		description:
			'Энди Дюфрейн осужден за двойное убийство. В тюрьме он находит друзей и способ воскресить свою жизнь.',
		filmCreator: [{ id: 1, filmCreator: 'Фрэнк Дарабонт' }],
		actors: [
			{ id: 1, link: '/actor/1', name: 'Тим Роббинс' },
			{ id: 2, link: '/actor/2', name: 'Морган Фриман' },
		],
		country: [{ id: 1, country: 'США' }],
		quality: [
			{ id: 1, quality: { quality: '1080p', label: 'Full HD' } },
			{ id: 2, quality: { quality: '720p', label: 'HD' } },
		],
	},
	{
		id: 2,
		link: '/movie/2',
		title: {
			ru: 'Крестный отец',
			eng: 'The Godfather',
			original: 'The Godfather',
		},
		cover_title_link: '/images/movies/2.jpg',
		rating: '9.2',
		year: 1972,
		genres: [
			{ id: 3, genreTitle: 'Криминал' },
			{ id: 4, genreTitle: 'Драма' },
		],
		time: '175 мин',
		teaserDescription: 'Сага о мафиозной семье Корлеоне.',
		description:
			'История о том, как Дон Вито Корлеоне передает управление семьей своему сыну Майклу.',
		filmCreator: [{ id: 2, filmCreator: 'Фрэнсис Форд Коппола' }],
		actors: [
			{ id: 3, link: '/actor/3', name: 'Марлон Брандо' },
			{ id: 4, link: '/actor/4', name: 'Аль Пачино' },
		],
		country: [{ id: 1, country: 'США' }],
		quality: [
			{ id: 1, quality: { quality: '1080p', label: 'Full HD' } },
			{ id: 2, quality: { quality: '576p', label: 'SD' } },
		],
	},
	{
		id: 3,
		link: '/movie/3',
		title: {
			ru: 'Темный рыцарь',
			eng: 'The Dark Knight',
			original: 'The Dark Knight',
		},
		cover_title_link: '/images/movies/3.jpg',
		rating: '9.0',
		year: 2008,
		genres: [
			{ id: 5, genreTitle: 'Боевик' },
			{ id: 6, genreTitle: 'Криминал' },
		],
		time: '152 мин',
		teaserDescription: 'Бэтмен против Джокера.',
		description:
			'История о том, как Бэтмен защищает Готэм от хаотичного и жестокого врага Джокера.',
		filmCreator: [{ id: 3, filmCreator: 'Кристофер Нолан' }],
		actors: [
			{ id: 5, link: '/actor/5', name: 'Кристиан Бейл' },
			{ id: 6, link: '/actor/6', name: 'Хит Леджер' },
		],
		country: [
			{ id: 1, country: 'США' },
			{ id: 2, country: 'Великобритания' },
		],
		quality: [
			{ id: 1, quality: { quality: '720p', label: 'HD' } },
			{ id: 2, quality: { quality: '576p', label: 'SD' } },
		],
	},
	{
		id: 4,
		link: '/movie/4',
		title: {
			ru: 'Властелин колец: Возвращение короля',
			eng: 'The Lord of the Rings: The Return of the King',
			original: 'The Lord of the Rings: The Return of the King',
		},
		cover_title_link: '/images/movies/4.jpg',
		rating: '8.9',
		year: 2003,
		genres: [
			{ id: 7, genreTitle: 'Приключения' },
			{ id: 8, genreTitle: 'Фэнтези' },
		],
		time: '201 мин',
		teaserDescription: 'Битва за освобождение Средиземья.',
		description:
			'Фродо и Сэм завершают свое путешествие к Роковой горе, а Аргорн ведет войска в решающую битву.',
		filmCreator: [{ id: 4, filmCreator: 'Питер Джексон' }],
		actors: [
			{ id: 7, link: '/actor/7', name: 'Элайджа Вуд' },
			{ id: 8, link: '/actor/8', name: 'Иэн Маккеллен' },
		],
		country: [
			{ id: 1, country: 'США' },
			{ id: 3, country: 'Новая Зеландия' },
		],
		quality: [
			{ id: 1, quality: { quality: '1080p', label: 'Full HD' } },
			{ id: 2, quality: { quality: '720p', label: 'HD' } },
		],
	},
	{
		id: 5,
		link: '/movie/5',
		title: {
			ru: 'Гран Торино',
			eng: 'Gran Torino',
			original: 'Gran Torino',
		},
		cover_title_link: '/images/movies/5.jpg',
		rating: '8.1',
		year: 2008,
		genres: [{ id: 4, genreTitle: 'Драма' }],
		time: '116 мин',
		teaserDescription: 'История о раскаянии и дружбе.',
		description:
			'Уолт Ковальски, суровый ветеран войны, находит общий язык с соседями-иммигрантами.',
		filmCreator: [{ id: 5, filmCreator: 'Клинт Иствуд' }],
		actors: [
			{ id: 9, link: '/actor/9', name: 'Клинт Иствуд' },
			{ id: 10, link: '/actor/10', name: 'Би Ванг' },
		],
		country: [{ id: 1, country: 'США' }],
		quality: [
			{ id: 1, quality: { quality: '1080p', label: 'Full HD' } },
			{ id: 2, quality: { quality: '720p', label: 'HD' } },
		],
	},
	{
		id: 6,
		link: '/movie/6',
		title: {
			ru: 'Форрест Гамп',
			eng: 'Forrest Gump',
			original: 'Forrest Gump',
		},
		cover_title_link: '/images/movies/6.jpg',
		rating: '8.8',
		year: 1994,
		genres: [
			{ id: 4, genreTitle: 'Драма' },
			{ id: 7, genreTitle: 'Приключения' },
		],
		time: '142 мин',
		teaserDescription:
			'История о человеке, изменившем жизнь множества людей своим добрым сердцем.',
		description:
			'Через уникальную личность Форреста Гампа передается история Америки 20-го века.',
		filmCreator: [{ id: 6, filmCreator: 'Роберт Земекис' }],
		actors: [
			{ id: 11, link: '/actor/11', name: 'Том Хэнкс' },
			{ id: 12, link: '/actor/12', name: 'Робин Райт' },
		],
		country: [{ id: 1, country: 'США' }],
		quality: [
			{ id: 1, quality: { quality: '720p', label: 'HD' } },
			{ id: 2, quality: { quality: '1080p', label: 'Full HD' } },
		],
	},
	{
		id: 7,
		link: '/movie/7',
		title: {
			ru: 'Интерстеллар',
			eng: 'Interstellar',
			original: 'Interstellar',
		},
		cover_title_link: '/images/movies/7.jpg',
		rating: '8.6',
		year: 2014,
		genres: [
			{ id: 7, genreTitle: 'Приключения' },
			{ id: 9, genreTitle: 'Фантастика' },
			{ id: 4, genreTitle: 'Драма' },
		],
		time: '169 мин',
		teaserDescription:
			'Путешествие за пределы галактики в поисках надежды для человечества.',
		description:
			'Группа исследователей отправляется к далеким планетам, чтобы спасти человечество.',
		filmCreator: [{ id: 3, filmCreator: 'Кристофер Нолан' }],
		actors: [
			{ id: 13, link: '/actor/13', name: 'Мэттью МакКонахи' },
			{ id: 14, link: '/actor/14', name: 'Энн Хэтэуэй' },
		],
		country: [
			{ id: 1, country: 'США' },
			{ id: 4, country: 'Канада' },
		],
		quality: [
			{ id: 1, quality: { quality: '1080p', label: 'Full HD' } },
			{ id: 2, quality: { quality: '720p', label: 'HD' } },
		],
	},
	{
		id: 8,
		link: '/movie/8',
		title: {
			ru: 'Начало',
			eng: 'Inception',
			original: 'Inception',
		},
		cover_title_link: '/images/movies/8.jpg',
		rating: '8.8',
		year: 2010,
		genres: [
			{ id: 9, genreTitle: 'Фантастика' },
			{ id: 7, genreTitle: 'Приключения' },
			{ id: 4, genreTitle: 'Драма' },
		],
		time: '148 мин',
		teaserDescription: 'Сон внутри сна и мир хрупкой реальности.',
		description:
			'Дон Кобб – искусный вор, который крадет секреты из подсознания во время сна.',
		filmCreator: [{ id: 3, filmCreator: 'Кристофер Нолан' }],
		actors: [
			{ id: 15, link: '/actor/15', name: 'Леонардо ДиКаприо' },
			{ id: 16, link: '/actor/16', name: 'Эллен Пейдж' },
		],
		country: [{ id: 1, country: 'США' }],
		quality: [
			{ id: 1, quality: { quality: '1080p', label: 'Full HD' } },
			{ id: 2, quality: { quality: '720p', label: 'HD' } },
		],
	},
	{
		id: 9,
		link: '/movie/9',
		title: {
			ru: 'Джанго освобожденный',
			eng: 'Django Unchained',
			original: 'Django Unchained',
		},
		cover_title_link: '/images/movies/9.jpg',
		rating: '8.4',
		year: 2012,
		genres: [
			{ id: 4, genreTitle: 'Драма' },
			{ id: 5, genreTitle: 'Боевик' },
			{ id: 6, genreTitle: 'Криминал' },
		],
		time: '165 мин',
		teaserDescription: 'Революция против рабства.',
		description:
			'Джанго объединяется с охотником за головами, чтобы освободить свою жену.',
		filmCreator: [{ id: 7, filmCreator: 'Квентин Тарантино' }],
		actors: [
			{ id: 17, link: '/actor/17', name: 'Джейми Фокс' },
			{ id: 18, link: '/actor/18', name: 'Кристоф Вальц' },
		],
		country: [{ id: 1, country: 'США' }],
		quality: [
			{ id: 1, quality: { quality: '1080p', label: 'Full HD' } },
			{ id: 2, quality: { quality: '720p', label: 'HD' } },
		],
	},
	{
		id: 10,
		link: '/movie/10',
		title: {
			ru: 'Леон',
			eng: 'Léon: The Professional',
			original: 'Léon: The Professional',
		},
		cover_title_link: '/images/movies/10.jpg',
		rating: '8.5',
		year: 1994,
		genres: [
			{ id: 4, genreTitle: 'Драма' },
			{ id: 3, genreTitle: 'Криминал' },
			{ id: 5, genreTitle: 'Боевик' },
		],
		time: '110 мин',
		teaserDescription: 'Забота и месть.',
		description:
			'Профессиональный убийца Леон становится опекуном Матильды, потерявшей свою семью.',
		filmCreator: [{ id: 8, filmCreator: 'Люк Бессон' }],
		actors: [
			{ id: 19, link: '/actor/19', name: 'Жан Рено' },
			{ id: 20, link: '/actor/20', name: 'Натали Портман' },
		],
		country: [
			{ id: 2, country: 'Франция' },
			{ id: 1, country: 'США' },
		],
		quality: [
			{ id: 1, quality: { quality: '720p', label: 'HD' } },
			{ id: 2, quality: { quality: '576p', label: 'SD' } },
		],
	},
	{
		id: 11,
		link: '/movie/11',
		title: {
			ru: 'Еретик',
			eng: 'Heretic',
			original: 'Heretic',
		},
		cover_title_link:
			'https://m.media-amazon.com/images/M/MV5BMjgyMzRhNmUtMTQyYy00NjVkLWFkZTktMzE2MzM4MTlkYzE5XkEyXkFqcGdeQXVyMzY1NDcwNDI@._V1_FMjpg_UX1000_.jpg',
		rating: '7.0',
		year: 2024,
		genres: [
			{ id: 7, genreTitle: 'Ужасы' },
			{ id: 8, genreTitle: 'Триллер' },
		],
		time: '1ч 51м',
		teaserDescription:
			'Церковная миссия оборачивается мрачным испытанием веры двух девушек в доме мистера Рида.',
		description:
			'Фильм рассказывает историю двух мормонских миссионерок, сестры Пакстон и сестры Барнс, которые оказываются в доме мистера Рида. Этот дом становится местом мрачных и опасных событий, где вера и выживание подвергаются жестоким испытаниям. Мистер Рид скрывает свою настоящую, ужасающую сущность под маской добродушия.',
		filmCreator: [
			{ id: 8, filmCreator: 'Скотт Бек' },
			{ id: 9, filmCreator: 'Брайан Вудс' },
		],
		actors: [
			{
				id: 21,
				link: 'https://www.imdb.com/name/nm0000421/',
				name: 'Хью Грант',
			},
			{
				id: 22,
				link: 'https://www.imdb.com/name/nm7737410/',
				name: 'Софи Тэтчер',
			},
			{
				id: 23,
				link: 'https://www.imdb.com/name/nm5853919/',
				name: 'Хлоя Ист',
			},
		],
		country: [
			{ id: 1, country: 'США' },
			{ id: 4, country: 'Канада' },
		],
		quality: [
			{
				id: 1,
				quality: {
					quality: '720p',
					label: 'HD',
				},
			},
			{
				id: 2,
				quality: {
					quality: '1080p',
					label: 'Full HD',
				},
			},
		],
	},
];
