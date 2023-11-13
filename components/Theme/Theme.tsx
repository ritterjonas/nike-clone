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
  font: {
    size12: '12px',
    size14: '14px',
    size16: '16px',
    size18: '18px',
    size20: '20px',
    size22: '22px',
    size24: '24px',
    size32: '32px',
  },
  border: {
    radius8: '8px',
    radius12: '12px',
    radius50: '50px',
  },
  spacing: {
    layout4: '4px',
    layout8: '8px',
    layout12: '12px',
    layout16: '16px',
    layout20: '20px',
    layout24: '24px',
    layout28: '28px',
    layout32: '32px',
    layout36: '36px',
    layout40: '40px',
    layout44: '44px',
    layout48: '48px',
  },
};

const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
