import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
        gradient: {
            main: string;
        };
    }
    interface PaletteOptions {
        gradient?: {
            main: string;
        };
    }
}

export const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#000000',
        },
        gradient: {
            // main: 'linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(29, 227, 253, 1) 50%, rgba(68, 255, 0, 1) 99%)',
            main: '#1de3fd',
        },
    },
});
