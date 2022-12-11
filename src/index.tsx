import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import './index.scss';
import { store } from './store/store';

const root = document.getElementById('root');
if (root) {
	const rootNode = ReactDOM.createRoot(root);
	rootNode.render(
		<Provider store={store}>
			<StrictMode>
				<App />
			</StrictMode>
		</Provider>
	);
}
