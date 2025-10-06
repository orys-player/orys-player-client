import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useSxs } from './_sxs';
import { MainToolbar } from '../mainToolbar';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `8px`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
}));

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
