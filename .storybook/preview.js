import { addDecorator } from '@storybook/react'; // <- or your view layer
import { withTests } from '@storybook/addon-jest';
// import results from '../src/test-results.json';
import results from '../src/.jest-test-results.json';

addDecorator(
  withTests({
    results,
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}