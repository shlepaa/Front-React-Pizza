import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
	test: string;
}

export const initialState: IUserState = {
	test: 'test',
};

export const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		setTest: (state, action: PayloadAction<string>) => {
			state.test = action.payload;
		},
	},
});

export default testSlice.reducer;

export const { setTest } = testSlice.actions;
