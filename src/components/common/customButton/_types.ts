import { ButtonProps } from '@mui/material';
import { PropsWithChildren } from 'react';

export interface CustomButtonProps extends ButtonProps, PropsWithChildren {
    gradient?: boolean;
}
