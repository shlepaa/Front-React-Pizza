import { configureStore } from '@reduxjs/toolkit';
import pizzaSortReducer from './reducers/PizzaSortSlice';

export const store = configureStore({
	reducer: {
		pizzaSortReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
