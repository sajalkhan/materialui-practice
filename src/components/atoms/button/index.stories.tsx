import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Buttons } from './';

export default {
  title: 'components/atoms/Button',
  component: Buttons,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = () => <Buttons />;

export const Normal = Template.bind({});
