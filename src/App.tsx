import { ThemeProvider } from '@mui/system';

import { MainMenu } from './components/common/mainMenu';
import { MyYoutubePlayer } from './components/players';
import { BackgroundView } from './components/views/backgroundView/BackgroundView';
import { theme } from './utils';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BackgroundView>
                <MainMenu />
                <MyYoutubePlayer />
            </BackgroundView>
        </ThemeProvider>
    );
}

export default App;
