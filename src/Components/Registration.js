import React, { useState } from 'react';
import { Paper, Grid, TextField, Button, Stack, Box, Radio } from '@mui/material';
import CustomFormLabel from './Custom/CustomFormLabel';
import PageContainer from './Custom/PageContainer';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Registration(props) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [gender, setGender] = useState('');

    let myStyle = {
        color: props.mode === 'light' ? 'white' : '#33334d',
        backgroundColor: props.mode === 'light' ? 'white' : '#33334d',
        border: `2px solid ${props.mode === 'light' ? '#33334d' : 'white'}`,
        p: 5,
        width: '50rem',
    };

    let textField = {
        color: props.mode === 'light' ? 'black' : 'white',
        border: props.mode === 'light' ? 'white' : '#33334d',
        backgroundColor: 'white',
    };

    let label = ['First Name', 'Last Name', 'Email', 'Password'];

    const handleSave = () => {
        let data = {
            firstName: fname,
            lastName: lname,
            email: email,
            password: pass,
            gender: gender,
        };

        localStorage.setItem('userData', JSON.stringify(data));
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <PageContainer title="Registration" sx={myStyle}>
                    <Paper sx={myStyle} elevation={10}>
                        <h3>Registration</h3>
                        <form>
                            <Grid container columnSpacing={2}>
                                {label.map((item) => {
                                    return (
                                        <Grid item xs={12} md={4}>
                                            <Box sx={{ display: 'flex' }}>
                                                <CustomFormLabel
                                                    htmlFor="name"
                                                    sx={{ color: props.mode === 'light' ? 'black' : 'white' }}
                                                >
                                                    <span style={{ color: 'red' }}>* </span>
                                                    {item}
                                                </CustomFormLabel>
                                            </Box>

                                            <TextField
                                                sx={textField}
                                                id="fname"
                                                variant="outlined"
                                                defaultValue={lname}
                                                fullWidth
                                                size="small"
                                                onChange={(e) => setLname(e.target.value)}
                                            />
                                        </Grid>
                                    );
                                })}

                                <Grid item xs={12} md={4}>
                                    <CustomFormLabel
                                        htmlFor="name"
                                        sx={{ color: props.mode === 'light' ? 'black' : 'white' }}
                                    >
                                        <span style={{ color: 'red' }}>* </span>Gender
                                    </CustomFormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        value={gender}
                                    >
                                        <Box sx={{ display: 'flex' }}>
                                            <FormControlLabel
                                                sx={{ color: props.mode === 'light' ? 'black' : 'white' }}
                                                value="female"
                                                control={<Radio />}
                                                label="Female"
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                            <FormControlLabel
                                                sx={{ color: props.mode === 'light' ? 'black' : 'white' }}
                                                value="male"
                                                control={<Radio />}
                                                label="Male"
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                        </Box>
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                        </form>
                        <Stack spacing={4} direction="row" sx={{ mt: 3 }}>
                            <Button type="submit" variant="contained" onClick={handleSave}>
                                SingUp
                            </Button>
                        </Stack>
                    </Paper>
                </PageContainer>
            </Box>
        </>
    );
}
