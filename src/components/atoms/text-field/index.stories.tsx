import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextFields from '.';

export default {
  title: 'components/atoms/TextFields',
  component: TextFields,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof TextFields>;

const Template: ComponentStory<typeof TextFields> = () => <TextFields />;

export const Normal = Template.bind({});
