import { ElementPositionType } from '@/shared/types/base.types';
import {
	CSSProperties,
	HTMLAttributes,
	PropsWithChildren,
	RefObject,
} from 'react';

interface IPopping extends HTMLAttributes<HTMLDivElement> {
	id: string;
	position: ElementPositionType;
	poppingRef?: RefObject<HTMLDivElement | null>;
	className?: string;
	style?: CSSProperties;
}

export function Popping({
	id,
	position,
	poppingRef,
	className,
	style,
	children,
	...rest
}: PropsWithChildren<IPopping>) {
	return (
		<div id={id}>
			<div
				ref={poppingRef}
				className={className}
				style={{
					zIndex: '100',
					position: 'absolute',
					inset: `${position.top}px auto auto ${position.left}px`,
					// transform: 'translate(-50%, -50%)',
					...style,
				}}
				{...rest}
			>
				{children}
			</div>
		</div>
	);
}
