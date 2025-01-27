import { useProfilesStore } from '@/store/profiles.store';
import { ProfileClassType, ProfileType } from '@/types/profile.types';

type TypeOut = {
	profiles: ProfileType[];
	currentActiveProfile: ProfileType;
	deleteProfile: (profileID: number) => void;
	getProfileByID: (profileID: number) => ProfileType | undefined;
	addProfile: (
		newProfileName: string,
		newProfileClass: ProfileClassType
	) => void;
	switchProfile: (newProfileID: number) => void;
	getProfilesCount: () => number;
};
export const useProfiles = (): TypeOut => {
	const {
		addProfile: addProfileStore,
		deleteProfile: deleteProfileStore,
		currentActiveProfile,
		switchProfile,
		profiles: profilesStore,
	} = useProfilesStore();

	const addProfile = (
		newProfileName: string,
		newProfileClass: ProfileClassType
	) => {
		addProfileStore(newProfileName, newProfileClass);
	};

	const deleteProfile = (profileID: number) => {
		const isCurrentActiveProfile = currentActiveProfile.id === profileID;
		if (!isCurrentActiveProfile) {
			deleteProfileStore(profileID);
		} else {
			switchProfile(1);
			deleteProfileStore(profileID);
		}
	};

	const getProfileByID = (profileID: number) => {
		return profilesStore.find(profile => profile.id === profileID);
	};

	const getProfilesCount = () => {
		return profilesStore.length;
	};

	return {
		profiles: profilesStore,
		currentActiveProfile,
		addProfile,
		deleteProfile,
		getProfileByID,
		switchProfile,
		getProfilesCount,
	};
};
