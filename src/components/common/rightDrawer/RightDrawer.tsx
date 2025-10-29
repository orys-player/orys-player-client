import { Stack } from '@mui/material';
import { useSxs } from './_sxs';
import { AudioPlayer } from '../../video';

export function RightDrawer() {
    const sxs = useSxs();

    return (
        <Stack position="fixed" sx={sxs.rightDrawer}>
            <AudioPlayer />
            <Stack id="gui-slot" />
        </Stack>
    );
}
