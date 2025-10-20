// import { ThemeProvider } from '@mui/system';
// import { MainMenu } from './components/common/mainMenu';
// import { RightDrawer } from './components/common';
// import { BackgroundView } from './components/views';

// import { theme } from './utils';
// import React from 'react';
// import PerlinBloomScene from './components/audio/audioVisualizer/AudioVisualizer';

// function App() {
//     const playerRef = React.useRef<any>(null);
//     const [mediaElement, setMediaElement] = React.useState<HTMLMediaElement | null>(null);

//     const handleReady = () => {
//         // Access the underlying <video> or <audio> element
//         const internal = playerRef.current?.getInternalPlayer() as HTMLMediaElement | undefined;
//         if (internal) {
//             setMediaElement(internal);
//             console.log('Media element connected to visualizer:', internal);
//         }
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <BackgroundView>
//                 <PerlinBloomScene mediaElement={mediaElement} />
//                 <MainMenu />
//                 <RightDrawer onReady={handleReady} />
//             </BackgroundView>
//         </ThemeProvider>
//     );
// }

// export default App;

import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import PerlinBloomScene from './components/audio/audioVisualizer/AudioVisualizer';

function App() {

    return (
        <div>
            <PerlinBloomScene />
        </div>
    );
}

export default App;
