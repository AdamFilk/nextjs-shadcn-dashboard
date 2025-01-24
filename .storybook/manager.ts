import { addons } from '@storybook/manager-api';
import { themes, typography } from '@storybook/theming';

addons.setConfig({
  theme: themes.dark,
  BASE_FONT_FAMILY: typography.fonts.mono,
});
