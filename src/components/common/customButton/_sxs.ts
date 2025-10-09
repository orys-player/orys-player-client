export function useSxs(gradient?: boolean) {
    return {
        customButton: {
            background: gradient
                ? 'linear-gradient(90deg,rgba(76, 18, 128, 1) 0%, rgba(20, 73, 117, 1) 50%, rgba(54, 163, 15, 1) 99%);'
                : 'none',
            textShadow: '#000000 0px 2px 3px',
        },
    };
}
