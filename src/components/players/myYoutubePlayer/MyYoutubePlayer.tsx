import { Stack, Typography } from '@mui/material';
import React from 'react';
import YoutubePlayer from 'youtube-player';

export function MyYoutubePlayer() {
    const playerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const player = YoutubePlayer(playerRef.current!, {
            videoId: 'ucnzN5byPdE',
            playerVars: {
                autoplay: 0,
                controls: 1,
                origin: window.location.origin,
            },
        });

        player.on('ready', () => {
            console.log('Player is ready!');
        });
    }, []);

    return (
        <Stack>
            <Typography>My YouTube Player</Typography>
            <div ref={playerRef} style={{ width: '1000px', height: '1000px' }} />
        </Stack>
    );
}
