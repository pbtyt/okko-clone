export type ProfileClassType = 'base' | 'child';

export type ProfileType = {
	id: number;
	profileName: string;
	profileClass: ProfileClassType;
};
