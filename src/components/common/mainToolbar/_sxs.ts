import { useTheme } from '@mui/material';

export function useSxs() {
    const theme = useTheme();

    return {
        mainToolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: `0.4rem`,
            backdropFilter: 'blur(0.4rem)',
            border: '1px solid',
            borderColor: (theme.vars || theme).palette.divider,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            boxShadow: (theme.vars || theme).shadows[1],
            padding: '0.4rem 0.8rem',
        },
        mainToolbarLeftSection: {
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            px: 0,
        },
        mainToolbarRightSection: {
            display: 'flex',
            gap: 1,
            alignItems: 'center',
        },
    };
}
