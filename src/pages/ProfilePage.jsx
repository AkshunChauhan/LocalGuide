import * as React from 'react';
import {
    CssBaseline,
    Box,
    Button,
    FormControl,
    InputLabel,
    Input,
    Typography,
    Stack,
    createTheme,
    ThemeProvider,
    Snackbar,
    Alert
} from '@mui/material';
import { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase'; // Adjust the import path if needed
import { updateEmail, updatePassword } from 'firebase/auth';

// Define your dark theme with white text color
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212', // Dark background
            paper: '#1e1e1e', // Slightly lighter dark background
        },
        text: {
            primary: '#ffffff', // White text color
            secondary: '#cccccc', // Lighter gray for secondary text
        },
    },
});

export default function ProfilePage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (auth.currentUser) {
            setEmail(auth.currentUser.email || '');
        }
    }, []);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (email !== auth.currentUser.email) {
                await updateEmail(auth.currentUser, email);
            }
            if (newPassword) {
                await updatePassword(auth.currentUser, newPassword);
            }
            setSuccess('Profile updated successfully');
            setError('');
        } catch (error) {
            setError(`Error: ${error.message}`);
            setSuccess('');
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: 'background.default',
                    px: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: 'auto',
                        width: '100%',
                        maxWidth: 400,
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                        p: 3,
                        boxShadow: 3,
                        gap: 2,
                    }}
                >
                    <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
                        Profile
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Stack gap={2}>
                            <FormControl fullWidth>
                                <InputLabel>Email</InputLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel>Current Password</InputLabel>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel>New Password</InputLabel>
                                <Input
                                    type="password"
                                    value={newPassword}
                                    onChange={handleNewPasswordChange}
                                />
                            </FormControl>
                            <Button type="submit" variant="contained" fullWidth>
                                Update Profile
                            </Button>
                        </Stack>
                    </form>
                    {success && (
                        <Snackbar open autoHideDuration={6000} onClose={() => setSuccess('')}>
                            <Alert onClose={() => setSuccess('')} severity="success">
                                {success}
                            </Alert>
                        </Snackbar>
                    )}
                    {error && (
                        <Snackbar open autoHideDuration={6000} onClose={() => setError('')}>
                            <Alert onClose={() => setError('')} severity="error">
                                {error}
                            </Alert>
                        </Snackbar>
                    )}
                </Box>
            </Box>
        </ThemeProvider>
    );
}
