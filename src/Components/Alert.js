import React from 'react';
import Alert from '@mui/material/Alert';
import { Box } from '@mui/material';

export default function AlertNew(props) {
    return (
        <>
            <Box sx={{ height: '50px' }}>
                {props.alert && (
                    <Alert variant="filled" severity={`${props.alert.type}`}>
                        <strong>{props.alert.msg}</strong>
                    </Alert>
                )}
            </Box>
        </>
    );
}
