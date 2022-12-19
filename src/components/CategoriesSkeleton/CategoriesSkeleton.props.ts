import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CategoriesSkeletonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	count: number;
}
