import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Elements/ui-panel',
  component: 'components/ui-panel/component',

  parameters: {
    docs: {
      iframeHeight: 200,
    },
  },

  argTypes: {
    heading: { control: { type: 'text' } },
  },
};

export const Default = (args: unknown) => ({
  // language=handlebars
  template: hbs`
    <UiPanel
      @heading="{{this.heading}}"
      @variant="{{this.variant}}"
      @headingLevel="{{this.headingLevel}}"
      @testId="{{this.testId}}"
      @renderPanel={{this.renderPanel}}
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    </UiPanel>`,
  context: args,
});

Default.args = {
  heading: 'Panel Heading',
};
