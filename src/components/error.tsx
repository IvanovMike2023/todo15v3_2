import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {useAppDispatch, useAppSelector} from "../app/store";
import {setEntityErrorAC} from "../app/App-reducer";

export default function CustomizedSnackbars() {
const error = useAppSelector((state)=>state.app.error)
    const dispatch=useAppDispatch()
    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setEntityErrorAC(''))
    };

    return (
        <div>
            <Snackbar open={!!error} autoHideDuration={3000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
}