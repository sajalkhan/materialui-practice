import { ComponentMeta, ComponentStory } from '@storybook/react';
import Cards from '.';

export default {
  title: 'components/atoms/Cards',
  component: Cards,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = () => <Cards />;

export const Normal = Template.bind({});
