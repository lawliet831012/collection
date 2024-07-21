'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/system';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#F19672',
    },
    secondary: {
      main: '#FFEFE8',
    },
    background: {
      default: '#FFE0D3',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'background.default',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export type Style = {
  [key: string]: SxProps<Theme> | undefined;
};

export default theme;
