import { Button } from '@mui/material';
import { CustomButtonProps } from './_types';
import { useSxs } from './_sxs';

export function CustomButton({ children, gradient, ...muiProps }: CustomButtonProps) {
    const sxs = useSxs(gradient);

    return (
        <Button {...muiProps} sx={sxs.customButton}>
            {children}
        </Button>
    );
}
