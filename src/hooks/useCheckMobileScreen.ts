import { useEffect, useState } from 'react';

const useCheckMobileScreen = (): boolean => {
	const [width, setWidth] = useState(window.outerWidth);

	const handleWindowSizeChange = () => {
		setWidth(window.outerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => window.removeEventListener('resize', handleWindowSizeChange);
	}, []);

	return width <= 768;
};

export default useCheckMobileScreen;
