import { DropDownProvider } from '@/app/(providers)/dropdown-provider';
import { ModalProvider } from '@/app/(providers)/modal-provider';
import { PreviewProvider } from '@/app/(providers)/preview-provider';
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
