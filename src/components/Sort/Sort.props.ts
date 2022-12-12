import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TypeParams } from '../../interfaces/TypeParams';

export interface SortProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sortParams: TypeParams[];
}
