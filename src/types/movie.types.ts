type MovieActorType = {
	id: number;
	link: string;
	name: string;
};

type MovieTitleType = {
	ru: string;
	eng: string;
	original: string;
};

type MovieGenreType = {
	id: number;
	genreTitle: string;
};

type MovieFilmCreatorType = {
	id: number;
	filmCreator: string;
};

type MovieCountryType = {
	id: number;
	country: string;
};

type QualityType = '576p' | '720p' | '1080p';
type QualityLabelType = 'SD' | 'HD' | 'Full HD';
type MovieQualityType = {
	id: number;
	quality: {
		quality: QualityType;
		label: QualityLabelType;
	};
};

export type MovieType = {
	id: number;
	link: string;
	title: MovieTitleType;
	cover_title_link: string;
	rating: string;
	year: number;
	genres: MovieGenreType[];
	time: string;
	teaserDescription: string;
	description: string;
	filmCreator: MovieFilmCreatorType[];
	actors: MovieActorType[];
	country: MovieCountryType[];
	quality: MovieQualityType[];
};

//type, for example, for localstorage
export type MovieMinimalType = Pick<MovieType, 'id' | 'link' | 'title'>;
