import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface UlSizesProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {
	setSize: (size: string) => void;
	currentSize: string;
	allSizes: string[];
}
