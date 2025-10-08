import { Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useSxs } from './_sxs';
import { CustomButton } from '../customButton';

export function MainToolbar() {
    const sxs = useSxs();

    return (
        <Toolbar sx={sxs.mainToolbar} variant="dense" disableGutters>
            <Box sx={sxs.mainToolbarLeftSection}>
                <Box sx={{ display: 'flex' }}>
                    <CustomButton variant="text" size="small">
                        Features
                    </CustomButton>
                    <CustomButton variant="text" size="small">
                        Testimonials
                    </CustomButton>
                    <CustomButton variant="text" size="small">
                        Highlights
                    </CustomButton>
                    <CustomButton variant="text" size="small">
                        Pricing
                    </CustomButton>
                </Box>
            </Box>
            <Box sx={sxs.mainToolbarRightSection}>
                <CustomButton variant="text" size="small">
                    Se connecter
                </CustomButton>
                <CustomButton gradient color="secondary" variant="contained" size="small">
                    S'inscrire
                </CustomButton>
            </Box>
        </Toolbar>
    );
}
