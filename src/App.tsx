import { ThemeProvider } from '@mui/system';
import { MainMenu } from './components/common/mainMenu';
import { RightDrawer } from './components/common';
import { BackgroundView } from './components/views';

import { theme } from './utils';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BackgroundView>
                <MainMenu />
                <RightDrawer />
            </BackgroundView>
        </ThemeProvider>
    );
}

export default App;
