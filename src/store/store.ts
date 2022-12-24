import { configureStore } from '@reduxjs/toolkit';
import pizzaSortReducer from './reducers/PizzaSortSlice';
import pizzasReducer from './reducers/PizzasSlice';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createReduxStore = (initialState = {}) => {
	return configureStore({
		reducer: {
			pizzaSortReducer,
			pizzasReducer,
		},
		preloadedState: initialState,
	});
};

export const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
