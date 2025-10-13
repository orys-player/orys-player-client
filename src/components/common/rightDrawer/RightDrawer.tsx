import { Stack } from '@mui/material';
import { useSxs } from './_sxs';
import { MyYoutubePlayer } from '../../players';

export function RightDrawer() {
    const sxs = useSxs();

    return (
        <Stack position="fixed" sx={sxs.rightDrawer}>
            <MyYoutubePlayer />
        </Stack>
    );
}
