import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SortProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sortParams: string[];
}
