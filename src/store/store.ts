import { configureStore } from '@reduxjs/toolkit';
import pizzaSortReducer from './slices/PizzaSortSlice/PizzaSortSlice';
import pizzasReducer from './slices/PizzasSlice/PizzasSlice';
import testReducer from './slices/TestSlice/TestSlice';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createReduxStore = (initialState = {}) => {
	return configureStore({
		reducer: {
			pizzaSortReducer,
			pizzasReducer,
			testReducer,
		},
		preloadedState: initialState,
	});
};

export const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
