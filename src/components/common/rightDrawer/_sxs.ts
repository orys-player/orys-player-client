import { useTheme } from '@mui/material';

export function useSxs() {
    const theme = useTheme();

    return {
        rightDrawer: {
            right: 0,
            top: '8rem',
            width: '20vw',
            height: '80vh',

            borderRadius: `0.4rem 0 0 0.4rem`,
            backdropFilter: 'blur(0.4rem)',
            border: '1px solid',
            borderColor: (theme.vars || theme).palette.divider,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            boxShadow: (theme.vars || theme).shadows[1],
            padding: '0.4rem 0.8rem',
        },
    };
}
