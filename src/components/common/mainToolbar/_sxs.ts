import { useTheme } from '@mui/material';

export function useSxs() {
    const theme = useTheme();

    return {
        mainToolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: `8px`,
            backdropFilter: 'blur(24px)',
            border: '1px solid',
            borderColor: (theme.vars || theme).palette.divider,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            boxShadow: (theme.vars || theme).shadows[1],
            padding: '8px 12px',
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
