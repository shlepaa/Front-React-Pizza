const fillWithNumbers = (count: number): number[] => {
	const numbers: number[] = [];
	for (let i = 0; i < count; i++) {
		numbers.push(i);
	}
	return numbers;
};

export default fillWithNumbers;
