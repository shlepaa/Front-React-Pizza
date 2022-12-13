export type TypeParams = IPriceParam | ITitleParam | IRatingParam;

interface IPriceParam {
	title: 'цене';
	param: 'sizesAndPrices';
}

interface ITitleParam {
	title: 'алфавиту';
	param: 'title';
}

interface IRatingParam {
	title: 'популярности';
	param: 'rating';
}
