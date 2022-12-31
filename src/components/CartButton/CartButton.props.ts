import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export interface CartButtonProps
	extends DetailedHTMLProps<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> {
	link: string;
}
