import { NavButton } from '@/shared/ui/NavButton';
import { ProfileImage } from '@/shared/ui/ProfileImage';
import { useRef } from 'react';

export function ProfileButton() {
	const profileButtonRef = useRef(null);
	const handleOnProfileClick = () => {};
	return (
		<NavButton ref={profileButtonRef} onClick={handleOnProfileClick}>
			<ProfileImage coverWidth={44} />
		</NavButton>
	);
}
