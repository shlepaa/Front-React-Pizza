import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AddButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	count: number;
	setCount: (inctremOrDecrem: string) => void;
}
