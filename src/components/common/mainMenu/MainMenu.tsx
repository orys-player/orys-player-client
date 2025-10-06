import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { useSxs } from './_sxs';
import { MainToolbar } from '../mainToolbar';

export function MainMenu() {
    const sxs = useSxs();

    return (
        <AppBar position="fixed" sx={sxs.mainMenuAppBar}>
            <Container maxWidth="lg">
                <MainToolbar />
            </Container>
        </AppBar>
    );
}
