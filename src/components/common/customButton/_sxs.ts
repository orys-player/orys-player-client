export function useSxs(gradient?: boolean) {
    return {
        customButton: {
            background: gradient
                ? 'linear-gradient(90deg,rgba(105, 0, 196, 1) 0%, rgba(0, 170, 212, 1) 50%, rgba(67, 250, 0, 1) 99%);'
                : 'none',
            textShadow: '#000000 0px 2px 2px',
        },
    };
}
