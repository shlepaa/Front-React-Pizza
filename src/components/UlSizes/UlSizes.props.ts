import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface UlSizesProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setSize: (size: string) => void;
	currentSize: string;
	allSizes: string[];
}
