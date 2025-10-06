import { Button } from '@mui/material';
import { CustomButtonProps } from './_types';

export function CustomButton({ children, gradient, ...muiProps }: CustomButtonProps) {
    return (
        <Button
            {...muiProps}
            sx={{
                background: gradient
                    ? 'linear-gradient(90deg,rgba(119, 58, 180, 1) 0%, rgba(29, 227, 253, 1) 50%, rgba(68, 255, 0, 1) 99%)'
                    : 'none',
            }}
        >
            {children}
        </Button>
    );
}
