import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../store/store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const setRender = <T,>(Component: JSX.Element, store?: Record<string, T>) => {
	return render(
		<Provider store={createReduxStore(store)}>{Component}</Provider>
	);
};

export default setRender;
