import { IPizza } from '../interfaces/IPizza';

const checkForSavedPizzas = (pizzas: IPizza[]): IPizza[] => {
	if (localStorage.pizzas) {
		return pizzas.map((pizza) => {
			const replacementPizza: IPizza = JSON.parse(
				localStorage.pizzas
			).find((pizza: IPizza) => pizza.title === pizza.title);
			if (replacementPizza) {
				return replacementPizza;
			}
			return pizza;
		});
	}
	return pizzas;
};

export default checkForSavedPizzas;
