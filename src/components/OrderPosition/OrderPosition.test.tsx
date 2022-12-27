import { OrderPosition } from './OrderPosition';
import setRender from '../../helpers/setRender';

describe('Table with all sizes for current pizza', () => {
	it('With filled sizes', async () => {
		setRender(<OrderPosition />);
	});
});
