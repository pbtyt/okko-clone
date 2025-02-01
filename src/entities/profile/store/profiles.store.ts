import { BASE_PROFILES_DATA } from '@/data/profiles.data';
import { PROFILES_STORAGE_KEY } from '@/shared/constants/localstorage.constants';
import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';
import type { ProfileClassType, ProfileType } from '../model/types';

interface IProfilesStore {
	profiles: ProfileType[];
	currentActiveProfile: ProfileType;
	addProfile: (
		newProfileName: string,
		newProfileClass: ProfileClassType
	) => void;
	editProfile: (profileID: number, newProfileName: string) => void;
	switchProfile: (newProfileID: number) => void;
	deleteProfile: (deleteProfileID: number) => void;
}

export const ProfilesStore = create<IProfilesStore>()(
	persist(
		combine(
			{
				profiles: BASE_PROFILES_DATA,
				currentActiveProfile: {
					id: 1,
					profileClass: 'base',
					profileName: 'Основной профиль',
				} as ProfileType,
			},
			(set, get) => {
				return {
					addProfile(newProfileName, newProfileClass) {
						set(state => {
							const prevId = state.profiles.at(-1)?.id;

							const newProfile: ProfileType = {
								id: (prevId || 0) + 1, //NOTE: stupid TS/JS
								profileClass: newProfileClass,
								profileName: newProfileName,
							};

							return {
								profiles: [...state.profiles, newProfile],
							};
						});
					},
					editProfile(profileID, newProfileName) {
						set(state => {
							const profile = state.profiles.find(
								profile => profile.id === profileID
							);
							profile!.profileName = newProfileName;
							return state;
						});
					},
					switchProfile(newProfileID) {
						set(state => {
							const profileToUse = state.profiles.find(
								profile => profile.id === newProfileID
							);

							return {
								currentActiveProfile: profileToUse,
							};
						});
					},
					deleteProfile(deleteProfileID) {
						set(state => {
							const profile = state.profiles.find(
								profile => profile.id === deleteProfileID
							);
							if (!profile) return state;
							return {
								profiles: state.profiles.filter(
									profile => profile.id !== deleteProfileID
								),
							};
						});
					},
				};
			}
		),
		{
			name: PROFILES_STORAGE_KEY,
		}
	)
);
