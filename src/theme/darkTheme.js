import { Theme } from './theme';

export const DarkTheme = {
  name: 'dark',
  colors: Theme.colors,
  contrast: Theme.colors.white,
  backgroundColor: Theme.colors.darkGray,
  header: {
    backgroundColor: Theme.colors.mediumGray,
    subtitle: Theme.colors.lightGreen,
  },
  containerFormTarefa: {
    titleColor: Theme.colors.lightGray,
  },
  formTarefa: {
    input: {
      backgroundColor: Theme.colors.mediumGray,
      borderColor: Theme.colors.mediumGray,
      color: Theme.colors.lightGray,
    },
  },
  footer: {
    backgroundColor: Theme.colors.mediumGray,
    color: Theme.colors.lightGray,
  },
};
