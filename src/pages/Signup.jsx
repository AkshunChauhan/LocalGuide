import * as React from 'react';
import {
    Box,
    Button,
    Divider,
    FormControl,
    InputLabel,
    Input,
    Typography,
    Stack,
    Link,
    createTheme,
    ThemeProvider
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { auth } from '../firebase/firebase'; // Adjust the import path if needed
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import logo from '../assets/logo.png'; // Import the logo image
import { styled } from '@mui/material/styles';

// Define your theme with black background and white text color
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000000', // Black background
            paper: '#1e1e1e', // Slightly lighter black background for paper
        },
        text: {
            primary: '#FFFFFF', // White text color
            secondary: '#CCCCCC', // Lighter gray for secondary text
        },
    },
});

const Logo = styled('img')({
    width: '100px', // Adjust size to reduce the logo size
    height: 'auto',
    display: 'block',
    margin: '0 auto',
});

function Copyright() {
    return (
        <Typography variant="body2" color="#ffffff" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://www.local-guide-403.web.app">
                Local Guide
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function SignUpPage() {
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formElements = event.currentTarget.elements;
        const email = formElements.email.value;
        const password = formElements.password.value;
        const confirmPassword = formElements.confirmPassword.value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Account created successfully');
            setTimeout(() => {
                navigate('/'); // Redirect to the home page
            }, 500); // 500ms delay
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('This email is already in use. Redirecting to login page.');
                setTimeout(() => {
                    navigate('/login'); // Redirect to the login page
                }, 500); // 500ms delay
            } else {
                alert(`Error: ${error.message}`);
            }
        }
    };

    const handleGoogleSignUp = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            alert('Signed up with Google');
            console.log(user);
            setTimeout(() => {
                navigate('/'); // Redirect to the home page
            }, 500); // 500ms delay
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: 'background.default', // Black background
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
                        bgcolor: 'background.paper', // Slightly lighter black for paper
                        p: 3,
                        boxShadow: 3,
                        gap: 2,
                    }}
                >
                    {/* Header with Logo */}
                    <Box
                        component="header"
                        sx={{
                            mb: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Logo src={logo} alt="Local Guide Logo" />
                        <Typography variant="h6" color="text.primary">
                            The Local Guide
                        </Typography>
                    </Box>

                    <Box
                        component="main"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        <Stack gap={4}>
                            <Stack gap={1}>
                                <Typography component="h1" variant="h4" color="text.primary">
                                    Sign up
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Already have an account?{' '}
                                    <Link component={RouterLink} to="/login" variant="body2" color="primary">
                                        Sign in!
                                    </Link>
                                </Typography>
                            </Stack>
                            <Button
                                variant="outlined"
                                fullWidth
                                startIcon={<GoogleIcon />}
                                onClick={handleGoogleSignUp}
                            >
                                Continue with Google
                            </Button>
                        </Stack>
                        <Divider>or</Divider>
                        <Stack gap={4} sx={{ mt: 2 }}>
                            <form onSubmit={handleSubmit}>
                                <FormControl required fullWidth>
                                    <InputLabel>Email</InputLabel>
                                    <Input type="email" name="email" />
                                </FormControl>
                                <FormControl required fullWidth>
                                    <InputLabel>Password</InputLabel>
                                    <Input type="password" name="password" />
                                </FormControl>
                                <FormControl required fullWidth>
                                    <InputLabel>Confirm Password</InputLabel>
                                    <Input type="password" name="confirmPassword" />
                                </FormControl>
                                <Stack gap={4} sx={{ mt: 2 }}>
                                    <Button type="submit" fullWidth variant="contained">
                                        Sign up
                                    </Button>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>

                    <Box component="footer" sx={{ py: 2 }}>
                        <Typography variant="body2" textAlign="center" color="text.secondary">
                            © The Local Guide {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
