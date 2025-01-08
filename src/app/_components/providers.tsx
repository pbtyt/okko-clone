import { PreviewProvider } from '@/providers/preview-provider';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren<unknown>) {
	return <PreviewProvider>{children}</PreviewProvider>;
}
