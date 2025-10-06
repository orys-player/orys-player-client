import { Box, Button, Divider, Drawer, IconButton, MenuItem, Toolbar } from '@mui/material';
import React from 'react';
import { useSxs } from './_sxs';

export function MainToolbar() {
    const sxs = useSxs();

    return (
        <Toolbar sx={sxs.mainToolbar} variant="dense" disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                <Box sx={{ display: 'flex' }}>
                    <Button variant="text" color="info" size="small">
                        Features
                    </Button>
                    <Button variant="text" color="info" size="small">
                        Testimonials
                    </Button>
                    <Button variant="text" color="info" size="small">
                        Highlights
                    </Button>
                    <Button variant="text" color="info" size="small">
                        Pricing
                    </Button>
                    <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                        FAQ
                    </Button>
                    <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                        Blog
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    alignItems: 'center',
                }}
            >
                <Button color="primary" variant="text" size="small">
                    Sign in
                </Button>
                <Button color="primary" variant="contained" size="small">
                    Sign up
                </Button>
            </Box>
        </Toolbar>
    );
}
