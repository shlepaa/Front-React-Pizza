import '@testing-library/jest-dom';
import { controller } from './store/slices/ActionCreators';

afterAll(() => {
	controller.abort();
});
