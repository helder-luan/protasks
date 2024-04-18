import { Theme } from './theme';

export const LightTheme = {
  name: 'light',
  ...Theme,
  contrast: Theme.colors.gray.dark,
  backgroundColor: Theme.colors.white,
  backgroundColorSecondary: Theme.colors.gray.light,
  header: {
    backgroundColor: Theme.colors.gray.light,
    subtitle: Theme.colors.gray.medium,
  },
  containerFormTarefa: {
    titleColor: Theme.colors.gray.dark,
  },
  formTarefa: {
    input: {
      backgroundColor: Theme.colors.gray.light,
      borderColor: Theme.colors.gray.light,
      color: Theme.colors.gray.dark,
    },
  },
  footer: {
    backgroundColor: Theme.colors.gray.light,
    color: Theme.colors.gray.medium,
  },
};
