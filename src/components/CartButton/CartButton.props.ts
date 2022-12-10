import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CartButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> {
	link: string;
}
