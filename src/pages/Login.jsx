import * as React from 'react';
import {
    CssBaseline,
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    InputLabel,
    Input,
    Typography,
    Stack,
    Link,
    createTheme,
    ThemeProvider,
    styled,
    Snackbar,
    Alert,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { auth } from '../firebase/firebase'; // Adjust the import path if needed
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    sendPasswordResetEmail
} from 'firebase/auth';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import logo from '../assets/logo.png'; // Import the logo image

// Define your dark theme with white text color
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000000', // Dark background
            paper: '#1e1e1e', // Slightly lighter dark background
        },
        text: {
            primary: '#ffffff', // White text color
            secondary: '#cccccc', // Lighter gray for secondary text
        },
    },
});

// Styled component for the logo
const Logo = styled('img')({
    width: '100px', // Adjust size to match footer
    height: 'auto',
    display: 'block',
    margin: '0 auto',
});

export default function SignInSideTemplate() {
    const navigate = useNavigate(); // Hook for navigation
    const [rememberMe, setRememberMe] = React.useState(false);
    const [emailForReset, setEmailForReset] = React.useState('');
    const [resettingPassword, setResettingPassword] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

    React.useEffect(() => {
        // Check local storage for the "Remember me" setting
        const storedRememberMe = localStorage.getItem('rememberMe') === 'true';
        setRememberMe(storedRememberMe);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formElements = event.currentTarget.elements;
        const email = formElements.email.value;
        const password = formElements.password.value;

        try {
            // Set persistence based on the "Remember me" checkbox
            await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);

            await signInWithEmailAndPassword(auth, email, password);
            setSnackbarMessage('Signed in successfully');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            navigate('/'); // Redirect to the home page
        } catch (error) {
            setSnackbarMessage(error.message);
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);

        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        setSnackbarMessage('Signed in with Google');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        console.log(user);
        navigate('/'); // Redirect to the home page
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
        localStorage.setItem('rememberMe', event.target.checked);
    };

    const handleForgotPasswordClick = () => {
        setResettingPassword(true);
    };

    const handlePasswordResetSubmit = async (event) => {
        event.preventDefault();
        try {
            await sendPasswordResetEmail(auth, emailForReset);
            setSnackbarMessage('Password reset email sent! Please check your inbox.');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            setResettingPassword(false);
        } catch (error) {
            setSnackbarMessage(error.message);
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
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
                    <Box
                        component="header"
                        sx={{
                            mb: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Logo src={logo} alt="Company Logo" />
                        <Typography variant="h6" color="text.primary" sx={{ mt: 1 }}>
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
                        {resettingPassword ? (
                            <Stack gap={4} sx={{ mt: 2 }}>
                                <Typography component="h1" variant="h4">
                                    Reset Password
                                </Typography>
                                <form onSubmit={handlePasswordResetSubmit}>
                                    <FormControl required fullWidth>
                                        <InputLabel>Email</InputLabel>
                                        <Input
                                            type="email"
                                            value={emailForReset}
                                            onChange={(e) => setEmailForReset(e.target.value)}
                                        />
                                    </FormControl>
                                    <Stack gap={4} sx={{ mt: 2 }}>
                                        <Button type="submit" fullWidth variant="contained">
                                            Send Password Reset Email
                                        </Button>
                                    </Stack>
                                </form>
                                <Button onClick={() => setResettingPassword(false)} color="primary">
                                    Back to Sign In
                                </Button>
                            </Stack>
                        ) : (
                            <>
                                <Stack gap={4}>
                                    <Stack gap={1}>
                                        <Typography component="h1" variant="h4">
                                            Sign in
                                        </Typography>
                                        <Typography variant="body2">
                                            New to the company?{' '}
                                            <Link component={RouterLink} to="/signup" variant="body2" color="primary">
                                                Sign up!
                                            </Link>
                                        </Typography>
                                    </Stack>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        startIcon={<GoogleIcon />}
                                        onClick={handleGoogleSignIn}
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
                                        <Stack gap={4} sx={{ mt: 2 }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <FormControlLabel
                                                    control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} name="persistent" />}
                                                    label="Remember me"
                                                />
                                                <Link
                                                    component="button"
                                                    variant="body2"
                                                    color="primary"
                                                    onClick={handleForgotPasswordClick}
                                                >
                                                    Forgot your password?
                                                </Link>
                                            </Box>
                                            <Button type="submit" fullWidth variant="contained">
                                                Sign in
                                            </Button>
                                        </Stack>
                                    </form>
                                </Stack>
                            </>
                        )}
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
