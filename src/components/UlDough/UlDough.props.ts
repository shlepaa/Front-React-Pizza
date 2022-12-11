import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface UlDoughProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setDough: (size: string) => void;
	allDoughs: string[];
	currentDough: string;
}
