import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './reducers/PizzaSlice';

export const store = configureStore({
	reducer: {
		pizzaReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
