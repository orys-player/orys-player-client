import { createTheme } from '@mui/material';
import { palette } from './palette';
import Moderniz from './fonts/Moderniz.otf';
import TangoSans from './fonts/TangoSans.ttf';

export const theme = createTheme({
    typography: {
        fontFamily: ['TangoSans', 'Arial', 'sans-serif'].join(','),
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Moderniz';
          src: url(${Moderniz});
        }
        @font-face {
          font-family: 'TangoSans';
          src: url(${TangoSans});
        }
      `,
        },
    },
    palette: palette,
});
