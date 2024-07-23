import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, MenuItem, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FormWrapper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    margin: theme.spacing(2, 0),
    boxShadow: theme.shadows[5],
}));

const countries = ["Canada", "United States", "India", "Australia"];
const states = {
    Canada: ["Alberta", "British Columbia", "Ontario"],
    "United States": ["California", "Texas", "New York"],
    India: ["Maharashtra", "Karnataka", "Tamil Nadu"],
    Australia: ["New South Wales", "Victoria", "Queensland"],
};

const roles = ["Family Member", "Traveler"];

export default function Form() {
    const { handleSubmit, control, watch, formState: { errors } } = useForm();
    const watchCountry = watch("country", "Canada");

    const onSubmit = (data) => {
        console.log(data);
        // Add your save to Firebase or CSV logic here
    };

    return (
        <FormWrapper>
            <Typography variant="h6" gutterBottom align="center">
                Registration Form
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="firstName"
                            control={control}
                            defaultValue=""
                            rules={{ required: "First name is required", minLength: { value: 2, message: "Must be at least 2 characters" } }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.firstName}
                                    helperText={errors.firstName ? errors.firstName.message : ""}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="lastName"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Last name is required", minLength: { value: 2, message: "Must be at least 2 characters" } }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.lastName}
                                    helperText={errors.lastName ? errors.lastName.message : ""}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Phone number is required" }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Phone Number"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.phoneNumber}
                                    helperText={errors.phoneNumber ? errors.phoneNumber.message : ""}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="emergencyContactNumber"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Emergency Contact Number"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="country"
                            control={control}
                            defaultValue="Canada"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    select
                                    label="Country"
                                    variant="outlined"
                                    fullWidth
                                >
                                    {countries.map((country) => (
                                        <MenuItem key={country} value={country}>
                                            {country}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="state"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    select
                                    label="State"
                                    variant="outlined"
                                    fullWidth
                                >
                                    {(states[watchCountry] || []).map((state) => (
                                        <MenuItem key={state} value={state}>
                                            {state}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="role"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    select
                                    label="Role"
                                    variant="outlined"
                                    fullWidth
                                >
                                    {roles.map((role) => (
                                        <MenuItem key={role} value={role}>
                                            {role}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} container justifyContent="center">
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ maxWidth: 200 }}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormWrapper>
    );
}
