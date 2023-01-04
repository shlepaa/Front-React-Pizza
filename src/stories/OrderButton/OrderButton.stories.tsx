import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderButton } from './OrderButton';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Library/OrderButton',
	component: OrderButton,
	decorators: [withRouter],
	argTypes: {
		backgroundColor: { control: 'color' },
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
