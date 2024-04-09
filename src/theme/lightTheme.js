import { Theme } from './theme';

export const LightTheme = {
  name: 'light',
  colors: Theme.colors,
  contrast: Theme.colors.darkGray,
  backgroundColor: Theme.colors.white,
  header: {
    backgroundColor: Theme.colors.lightGray,
    subtitle: Theme.colors.mediumGray,
  },
  containerFormTarefa: {
    titleColor: Theme.colors.darkGray,
  },
  formTarefa: {
    input: {
      backgroundColor: Theme.colors.lightGray,
      borderColor: Theme.colors.lightGray,
      color: Theme.colors.darkGray,
    },
  },
  footer: {
    backgroundColor: Theme.colors.lightGray,
    color: Theme.colors.mediumGray,
  },
};
