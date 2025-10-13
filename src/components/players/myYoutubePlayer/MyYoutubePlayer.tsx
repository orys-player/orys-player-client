import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useSxs } from './_sxs';

export function MyYoutubePlayer() {
    const playerRef = React.useRef<HTMLDivElement>(null);

    const sxs = useSxs();

    return (
        <Stack>
            <Typography>My YouTube Player</Typography>
            <div ref={playerRef} style={sxs.myYoutubePlayer} />
        </Stack>
    );
}
