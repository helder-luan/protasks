import { Theme } from './theme';

export const DarkTheme = {
  name: 'dark',
  ...Theme,
  contrast: Theme.colors.white,
  backgroundColor: Theme.colors.gray.dark,
  backgroundColorSecondary: Theme.colors.gray.medium,
  header: {
    backgroundColor: Theme.colors.gray.medium,
    subtitle: Theme.colors.green.light1,
  },
  containerFormTarefa: {
    titleColor: Theme.colors.gray.light,
  },
  formTarefa: {
    input: {
      backgroundColor: Theme.colors.gray.medium,
      borderColor: Theme.colors.gray.medium,
      color: Theme.colors.gray.light,
    },
  },
  footer: {
    backgroundColor: Theme.colors.gray.medium,
    color: Theme.colors.gray.light,
  },
};
