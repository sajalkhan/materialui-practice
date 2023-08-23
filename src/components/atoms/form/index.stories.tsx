import { ComponentMeta, ComponentStory } from '@storybook/react';
import Form from '.';

export default {
  title: 'components/atoms/Form',
  component: Form,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => <Form />;

export const Normal = Template.bind({});
