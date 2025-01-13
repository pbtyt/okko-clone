import { DropDownProvider } from '@/providers/dropdown-provider';
import { ModalProvider } from '@/providers/modal-provider';
import { PreviewProvider } from '@/providers/preview-provider';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren<unknown>) {
	return (
		// <PoppingProvider>{children}</PoppingProvider>
		<ModalProvider>
			<PreviewProvider>
				<DropDownProvider>{children}</DropDownProvider>
			</PreviewProvider>
		</ModalProvider>
	);
}
