import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createReduxStore } from '../../store/store';

const setRender = <T,>(
	Component: JSX.Element,
	store?: Record<string, T>
): JSX.Element => {
	return (
		<MemoryRouter>
			<Provider store={createReduxStore(store)}>{Component}</Provider>
		</MemoryRouter>
	);
};

export default setRender;
