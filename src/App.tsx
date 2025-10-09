import { ThemeProvider } from '@mui/system';

import { MainMenu } from './components/common/mainMenu';
import { MyYoutubePlayer } from './components/players';
import { RightDrawer } from './components/common';
import { BackgroundView } from './components/views';

import { theme } from './utils';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BackgroundView>
                <MainMenu />
                <MyYoutubePlayer />
                <RightDrawer />
            </BackgroundView>
        </ThemeProvider>
    );
}

export default App;
