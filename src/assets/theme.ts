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
      main: '#5b5f62',
    },
    secondary: {
      main: '#f5f9f2',
    },
    background: {
      default: '#fcf9f7',
    },
    text: {
      primary: '#313030',
      secondary: '#5d5f5c',
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
