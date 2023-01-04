import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderButton } from './OrderButton';
import { userEvent, within } from '@storybook/testing-library';
import setRender from '../helpers/setRender';

export default {
	title: 'Library/OrderButton',
	component: OrderButton,
	decorators: [(Story) => setRender(<Story />)],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	parameters: {
		backgrounds: {
			values: [
				{ name: 'red', value: '#f00' },
				{ name: 'green', value: '#0f0' },
				{ name: 'blue', value: '#00f' },
			],
		},
	},
} as ComponentMeta<typeof OrderButton>;

const Template: ComponentStory<typeof OrderButton> = (args) => (
	<OrderButton {...args} />
);

export const Order = Template.bind({});
Order.args = {
	back: false,
	children: 'Order now',
};

export const Back = Template.bind({});
Back.args = {
	back: true,
	children: 'Return back',
};

Back.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);

	await userEvent.click(canvas.getByTestId('back-button'));

	await expect(canvas.getByTestId('back-text')).toHaveTextContent(
		'Return back'
	);
};
