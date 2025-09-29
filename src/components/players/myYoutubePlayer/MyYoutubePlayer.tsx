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
        <div>
            <h2 className="text-xl font-bold mb-2">My YouTube Player</h2>
            <div ref={playerRef} style={{ width: '100%', height: '390px' }} />
        </div>
    );
}
