import React from 'react';
import ReactPlayer from 'react-player';
export const AudioPlayerContext = React.createContext<React.RefObject<typeof ReactPlayer | null> | null>(null);

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
    const playerRef = React.useRef<typeof ReactPlayer | null>(null);

    return <AudioPlayerContext.Provider value={playerRef}>{children}</AudioPlayerContext.Provider>;
}
