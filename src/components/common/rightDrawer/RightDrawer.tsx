import { Stack } from '@mui/material';
import { useSxs } from './_sxs';
import { MyYoutubePlayer } from '../../video';

export function RightDrawer() {
    const sxs = useSxs();

    return (
        <Stack position="fixed" sx={sxs.rightDrawer}>
            {/* <MyYoutubePlayer /> */}
            <audio id="audio-player" src="/src/assets/audioFiles/music.mp3" controls />
            <Stack id="gui-slot" />
        </Stack>
    );
}
