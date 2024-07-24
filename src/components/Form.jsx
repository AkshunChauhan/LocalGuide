import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import {
	TextField,
	Button,
	MenuItem,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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

const countries = ["Canada", "United States", "India", "Australia"];
const states = {
	Canada: ["Alberta", "British Columbia", "Ontario"],
	"United States": ["California", "Texas", "New York"],
	India: ["Maharashtra", "Karnataka", "Tamil Nadu"],
	Australia: ["New South Wales", "Victoria", "Queensland"],
};

const roles = ["Family Member", "Traveler"];

export default function Form() {
	const {
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = useForm();
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
							rules={{
								required: "First name is required",
								minLength: {
									value: 2,
									message: "Must be at least 2 characters",
								},
							}}
							render={({ field }) => (
								<BrighterBlueBorderTextField
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
							rules={{
								required: "Last name is required",
								minLength: {
									value: 2,
									message: "Must be at least 2 characters",
								},
							}}
							render={({ field }) => (
								<BrighterBlueBorderTextField
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
								<BrighterBlueBorderTextField
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
								<BrighterBlueBorderTextField
									{...field}
									label="Phone Number"
									variant="outlined"
									fullWidth
									error={!!errors.phoneNumber}
									helperText={
										errors.phoneNumber ? errors.phoneNumber.message : ""
									}
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
								<BrighterBlueBorderTextField
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
								<BrighterBlueBorderTextField
									{...field}
									select
									label="Country"
									variant="outlined"
									fullWidth
									SelectProps={{ IconComponent: () => <ArrowDropDownIcon /> }}
								>
									{countries.map((country) => (
										<MenuItem key={country} value={country}>
											{country}
										</MenuItem>
									))}
								</BrighterBlueBorderTextField>
							)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Controller
							name="state"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<BrighterBlueBorderTextField
									{...field}
									select
									label="State"
									variant="outlined"
									fullWidth
									SelectProps={{ IconComponent: () => <ArrowDropDownIcon /> }}
								>
									{(states[watchCountry] || []).map((state) => (
										<MenuItem key={state} value={state}>
											{state}
										</MenuItem>
									))}
								</BrighterBlueBorderTextField>
							)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Controller
							name="role"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<BrighterBlueBorderTextField
									{...field}
									select
									label="Role"
									variant="outlined"
									fullWidth
									SelectProps={{ IconComponent: () => <ArrowDropDownIcon /> }}
								>
									{roles.map((role) => (
										<MenuItem key={role} value={role}>
											{role}
										</MenuItem>
									))}
								</BrighterBlueBorderTextField>
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
							}} // Brighter blue background with white text
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
		</FormWrapper>
	);
}
