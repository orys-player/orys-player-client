import { Button } from '@mui/material';
import { CustomButtonProps } from './_types';

export function CustomButton({ label, ...muiProps }: CustomButtonProps) {
    return <Button {...muiProps}>{label}</Button>;
}
