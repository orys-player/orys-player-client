import { theme } from 'src/utils';

export function useSxs() {
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
    };
}
