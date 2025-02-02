'use client';

import { PropsWithChildren, ReactNode, RefObject } from 'react';

interface NavButtonProps {
	onClick?: () => void;
	icon?: ReactNode;
	ref?: RefObject<HTMLButtonElement | null>;
	className?: string;
}

export function NavButton({
	onClick = () => {},
	icon,
	ref,
	className,
	children,
}: PropsWithChildren<NavButtonProps>) {
	return (
		<button className={className} onClick={onClick} ref={ref}>
			{icon}
			{children}
		</button>
	);
}
