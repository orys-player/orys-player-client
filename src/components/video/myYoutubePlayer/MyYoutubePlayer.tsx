import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useSxs } from './_sxs';
import ReactPlayer from 'react-player';

export function MyYoutubePlayer() {
    const sxs = useSxs();

    const [title, setTitle] = React.useState('');
    const videoUrl = 'https://www.youtube.com/watch?v=PKD8fapaXAw';
    const videoId = new URLSearchParams(new URL(videoUrl).search).get('v');

    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

    React.useEffect(() => {
        async function fetchVideoTitle() {
            const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    setTitle(data.items[0].snippet.title);
                } else {
                    setTitle('Unknown Video');
                }
            } catch (error) {
                console.error('Error fetching video title:', error);
                setTitle('Error loading title');
            }
        }

        fetchVideoTitle();
    }, [videoId]);

    return (
        <Stack>
            <Typography>{title}</Typography>
            <ReactPlayer style={sxs.myYoutubePlayer} src={videoUrl} controls={true} />
        </Stack>
    );
}
