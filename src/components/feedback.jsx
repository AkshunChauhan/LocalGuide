import * as React from "react";
import { Paper, Typography, Grid, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { Rating } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import green tick icon
import { db } from '../firebase/firebase'; // Ensure correct import path
import { collection, addDoc } from 'firebase/firestore';

// Styled component for form wrapper
const FormWrapper = styled(Paper)(({ theme }) => ({
    backgroundColor: "#1e1e1e", // Dark background
    color: "#ffffff", // White text
    padding: theme.spacing(4),
    margin: theme.spacing(2, 0),
    boxShadow: theme.shadows[1], // Light shadow for a dark theme
}));

// Styled component for text fields with light blue border
const BrighterBlueBorderTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#0056b3", // Brighter blue border
        },
        "&:hover fieldset": {
            borderColor: "#004494", // Darker blue on hover
        },
        "&.Mui-focused fieldset": {
            borderColor: "#003377", // Even darker blue when focused
        },
    },
    "& .MuiInputLabel-root": {
        color: "#ffffff", // Label color
    },
    "& .MuiInputBase-input": {
        color: "#ffffff", // Input text color
        backgroundColor: "transparent !important", // Transparent background
    },
    "& .MuiSelect-select": {
        color: "#ffffff", // Select text color
        backgroundColor: "transparent", // Transparent background
    },
    "& .MuiMenuItem-root": {
        color: "#ffffff", // Menu item text color
    },
    "& .MuiMenu-paper": {
        backgroundColor: "#2c2c2c", // Dropdown background color
        color: "#ffffff", // Dropdown text color
    },
    "& .MuiSelect-icon": {
        color: "#0056b3", // Arrow color
    },
    "& input:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #1e1e1e inset !important", // Ensuring the box-shadow color matches the background
        WebkitTextFillColor: "#ffffff !important", // Autofill text color
    },
}));

const FeedbackForm = () => {
    const [submitted, setSubmitted] = React.useState(() => localStorage.getItem('feedbackSubmitted') === 'true');
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            // Create feedback object
            const feedbackData = {
                fullName: data.fullName,
                email: data.email,
                feedback: data.feedback,
                rating: data.rating,
                submittedAt: new Date(),
            };

            // Add feedback to Firestore
            await addDoc(collection(db, 'feedback'), feedbackData);
            localStorage.setItem('feedbackSubmitted', 'true'); // Set submission state in localStorage
            setSubmitted(true); // Set submitted state to true
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Failed to submit feedback.');
        }
    };

    return (
        <FormWrapper>
            {submitted ? (
                <div style={{ textAlign: 'center' }}>
                    <CheckCircleIcon style={{ fontSize: 60, color: 'green' }} />
                    <Typography variant="h5" paragraph>
                        Thanks for your feedback!
                    </Typography>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Typography variant="h4" align="center" paragraph> Your feedback matters</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="fullName"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Full name is required",
                                    minLength: {
                                        value: 2,
                                        message: "Must be at least 2 characters",
                                    },
                                }}
                                render={({ field }) => (
                                    <BrighterBlueBorderTextField
                                        {...field}
                                        label="Full Name"
                                        variant="outlined"
                                        fullWidth
                                        error={!!errors.fullName}
                                        helperText={errors.fullName ? errors.fullName.message : ""}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Email is required" }}
                                render={({ field }) => (
                                    <BrighterBlueBorderTextField
                                        {...field}
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        error={!!errors.email}
                                        helperText={errors.email ? errors.email.message : ""}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="feedback"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Feedback is required" }}
                                render={({ field }) => (
                                    <BrighterBlueBorderTextField
                                        {...field}
                                        label="Your Feedback"
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        error={!!errors.feedback}
                                        helperText={errors.feedback ? errors.feedback.message : ""}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Rating:</Typography>
                            <Controller
                                name="rating"
                                control={control}
                                defaultValue={0}
                                rules={{ required: "Rating is required" }}
                                render={({ field }) => (
                                    <Rating
                                        {...field}
                                        name="rating"
                                        value={field.value}
                                        onChange={(event, newValue) => field.onChange(newValue)}
                                        size="large"
                                        sx={{
                                            color: '#ffab00', // Star color
                                            '& .MuiRating-icon': {
                                                color: '#ffffff', // Star border color
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} container justifyContent="center">
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    maxWidth: 200,
                                    backgroundColor: "#0056b3",
                                    color: "#ffffff",
                                    '&:hover': {
                                        backgroundColor: "#004494",
                                    },
                                }} // Brighter blue background with white text
                            >
                                Submit Feedback
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            )}
        </FormWrapper>
    );
};

export default FeedbackForm;
