import React, { useState, useReducer } from 'react';
import { Paper, Grid, TextField, Button, Stack, Box } from '@mui/material';
import CustomFormLabel from './Custom/CustomFormLabel';
import PageContainer from './Custom/PageContainer';
import { reducer, initialState } from './Reducer';

export default function Registration(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    let myStyle = {
        color: props.mode === 'light' ? 'white' : '#33334d',
        backgroundColor: props.mode === 'light' ? 'white' : '#33334d',
        border: `2px solid ${props.mode === 'light' ? '#33334d' : 'white'}`,
        p: 5,
        width: '50rem',
    };

    let textField = {
        border: props.mode === 'light' ? 'white' : '#33334d',
        backgroundColor: 'white',
    };

    const handleClick = () => {
        if (pass === '123') {
            props.showAlert('Login Successfully', 'success');
        } else {
            props.showAlert('Invalid Password', 'error');
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                <PageContainer title="Login" sx={myStyle}>
                    <Paper sx={myStyle} elevation={10}>
                        <h3>Login</h3>
                        <form>
                            <Grid container columnSpacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex' }}>
                                        <CustomFormLabel
                                            htmlFor="name"
                                            sx={{ color: props.mode === 'light' ? 'black' : 'white' }}
                                        >
                                            <span style={{ color: 'red' }}>* </span>Email
                                        </CustomFormLabel>
                                    </Box>
                                    <TextField
                                        sx={textField}
                                        id="email"
                                        type="email"
                                        variant="outlined"
                                        defaultValue={email}
                                        fullWidth
                                        size="small"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex' }}>
                                        <CustomFormLabel
                                            htmlFor="name"
                                            sx={{ color: props.mode === 'light' ? 'black' : 'white' }}
                                        >
                                            <span style={{ color: 'red' }}>* </span>Password
                                        </CustomFormLabel>
                                    </Box>
                                    <TextField
                                        sx={textField}
                                        type="password"
                                        id="password"
                                        variant="outlined"
                                        defaultValue={pass}
                                        fullWidth
                                        size="small"
                                        onChange={(e) => setPass(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                        <Stack spacing={4} direction="row" sx={{ mt: 3 }}>
                            <Button variant="contained" onClick={handleClick}>
                                Login
                            </Button>
                        </Stack>
                    </Paper>
                    <div className="m-8">
                        <p className={`m-8 font-semibold ${props.mode === 'light' ? 'text-black' : 'text-white'}`}>
                            Current Value : {state}
                        </p>
                        <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    dispatch({ type: 'add' });
                                }}
                            >
                                +
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    dispatch({ type: 'minus' });
                                }}
                            >
                                -
                            </Button>
                        </Stack>
                    </div>
                </PageContainer>
            </Box>
        </>
    );
}
