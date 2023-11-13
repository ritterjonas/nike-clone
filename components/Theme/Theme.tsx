import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    neutral100: '#fff',
    neutral200: '#f7f7f7',
    neutral300: '#d6d6d6',
    neutral500: '#737373',
    neutral600: '#4d4d4d',
    neutral700: '#1a1a1a',
    primary: '#000',
    success300: '#061',
  },
};

const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
