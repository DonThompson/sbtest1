// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SampleComponent } from './sample.component';


export default {
  title: 'Example/Sample',
  component: SampleComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SampleComponent> = (args: SampleComponent) => ({
  component: SampleComponent,
  props: args,
});

export const Base = Template.bind({});
Base.args = {
  
};
