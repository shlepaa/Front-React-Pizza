import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.scss';

const root = document.getElementById('root');
if (root) {
	const rootNode = ReactDOM.createRoot(root);
	rootNode.render(
		<StrictMode>
			<App />
		</StrictMode>
	);
}
