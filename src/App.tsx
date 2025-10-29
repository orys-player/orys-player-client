import { ThemeProvider } from '@mui/system';
import { MainMenu } from './components/common/mainMenu';
import { RightDrawer } from './components/common';
import { BackgroundView } from './components/views';

import { theme } from './utils';
import React from 'react';
import { PerlinBloomScene } from './components/audio/perlinBloomScene/PerlinBloomScene';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BackgroundView>
                <PerlinBloomScene />
                <MainMenu />
                <RightDrawer />
            </BackgroundView>
        </ThemeProvider>
    );
}

export default App;
