import {
	PreviewContext,
	type PreviewContextType,
} from '@/providers/preview-provider';
import { useContext } from 'react';

export const usePreview = (): PreviewContextType => {
	const { isPreview, setIsPreview, previewPosition, setPreviewPosition } =
		useContext(PreviewContext);

	return { isPreview, setIsPreview, previewPosition, setPreviewPosition };
};
