import { Stack } from '@mui/material';
import { BackgroundViewProps } from './_types';
import { useSxs } from './_sxs';

export function BackgroundView({ children }: BackgroundViewProps) {
    const sxs = useSxs();

    return <Stack sx={sxs.backgroundView}>{children}</Stack>;
}
