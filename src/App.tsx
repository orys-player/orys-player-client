import { ThemeProvider } from '@mui/system';
import { MainMenu } from './components/common/mainMenu';
import { RightDrawer } from './components/common';
import { BackgroundView } from './components/views';

import { theme } from './utils';
import { RotatingCube } from './components/audio';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BackgroundView>
                <RotatingCube />
                <MainMenu />
                <RightDrawer />
            </BackgroundView>
        </ThemeProvider>
    );
}

export default App;
