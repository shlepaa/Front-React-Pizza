import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AddButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	count: number;
	setCount: (inctremOrDecrem: string) => void;
}
