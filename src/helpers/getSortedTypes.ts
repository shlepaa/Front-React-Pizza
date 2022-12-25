import { IPizza } from '../interfaces/IPizza';

const getSortedTypes = (pizzas: IPizza[]): string[] => {
	const allPizzaTypes = pizzas.map((pizza) => pizza.types).flat();
	const sortedTypes: string[] = [];
	allPizzaTypes.forEach((pizza) => {
		if (!sortedTypes.includes(pizza)) {
			sortedTypes.push(pizza);
		}
	});
	return sortedTypes;
};

export default getSortedTypes;
