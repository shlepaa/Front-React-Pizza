import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface UlSizesProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {
	setSize: (size: string) => void;
	size: string;
}
