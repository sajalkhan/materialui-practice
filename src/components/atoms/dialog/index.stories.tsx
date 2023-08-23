import { ComponentMeta, ComponentStory } from '@storybook/react';
import Test from '.';

export default {
  title: 'components/atoms/Dialog',
  component: Test,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = () => <Test />;

export const Normal = Template.bind({});
