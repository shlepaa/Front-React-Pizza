import { CalcButton } from './CalcButton';
import setRender from '../../helpers/setRender';

describe('Table with all sizes for current pizza', () => {
	it('With filled sizes', async () => {
		setRender(<CalcButton />);
	});
});
