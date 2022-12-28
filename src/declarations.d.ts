declare module '*.module.scss';
declare module '*.jpg';
declare module '*.png';
declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
	export default content;
}
