import { Stack } from '@mui/material';
import { useSxs } from './_sxs';

export function RightDrawer() {
    const sxs = useSxs();

    return (
        <Stack position="fixed" sx={sxs.rightDrawer}>
            Right Drawer
        </Stack>
    );
}
