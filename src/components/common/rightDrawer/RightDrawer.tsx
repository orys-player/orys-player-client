import { Stack } from '@mui/material';
import { useSxs } from './_sxs';
import { MyYoutubePlayer } from '../../video';

interface RightDrawerProps {
    onReady?: () => void;
}

export function RightDrawer({ onReady }: RightDrawerProps) {
    const sxs = useSxs();

    return (
        <Stack position="fixed" sx={sxs.rightDrawer}>
            <MyYoutubePlayer onReady={onReady} />
            <Stack id="gui-slot" />
        </Stack>
    );
}
