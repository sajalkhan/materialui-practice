import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResponsiveAppBar from '.';

export default {
  title: 'components/atoms/AppBar',
  component: ResponsiveAppBar,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof ResponsiveAppBar>;

const Template: ComponentStory<typeof ResponsiveAppBar> = () => <ResponsiveAppBar />;

export const Normal = Template.bind({});
