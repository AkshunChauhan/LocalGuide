import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import {
	TextField,
	Button,
	MenuItem,
	Grid,
	Paper,
	Typography,
	CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { db, auth } from "../firebase/firebase"; // Import your Firebase config
import { doc, setDoc } from "firebase/firestore";
import { useCookies } from "react-cookie";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged

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

const countries = [
	"Canada",
	"United States",
	"India",
	"Australia",
	"Pakistan",
	"Sri Lanka",
	"Philippines",
	"Afghanistan",
	"United Kingdom",
	"Japan",
	"South Korea",
	"Spain",
	"Russia",
	"Ukraine",
	"Nigeria",
	"Ghana",
	"South Africa"
];

const states = {
	Canada: ["Alberta", "British Columbia", "Ontario", "Quebec", "Manitoba"],
	"United States": ["California", "Texas", "New York", "Florida", "Illinois"],
	India: ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi", "West Bengal", "Punjab", "Haryana", "Kerela", "Rajasthan", "UP", "Himachal"],
	Australia: ["New South Wales", "Victoria", "Queensland", "South Australia", "Western Australia"],
	Pakistan: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan", "Islamabad"],
	"Sri Lanka": ["Western Province", "Central Province", "Southern Province", "Northern Province", "Eastern Province"],
	Philippines: ["Metro Manila", "Cebu", "Davao", "Iloilo", "Baguio"],
	Afghanistan: ["Kabul", "Herat", "Kandahar", "Mazar-i-Sharif", "Jalalabad"],
	"United Kingdom": ["England", "Scotland", "Wales", "Northern Ireland"],
	Japan: ["Tokyo", "Osaka", "Kyoto", "Hokkaido", "Fukuoka"],
	"South Korea": ["Seoul", "Busan", "Incheon", "Gyeongju", "Jeju"],
	Spain: ["Madrid", "Barcelona", "Valencia", "Seville", "Bilbao"],
	Russia: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan"],
	Ukraine: ["Kyiv", "Lviv", "Odesa", "Kharkiv", "Dnipro"],
	Nigeria: ["Lagos", "Abuja", "Rivers", "Kano", "Enugu"],
	Ghana: ["Accra", "Kumasi", "Tamale", "Takoradi", "Cape Coast"],
	"South Africa": ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape", "Limpopo"]
};


const roles = ["Family Member", "Traveler"];

export default function Form() {
	const navigate = useNavigate(); // Initialize useNavigate
	const {
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = useForm();
	const watchCountry = watch("country", "Canada");
	const [cookies, setCookie] = useCookies(["formSubmitted"]);
	const [success, setSuccess] = React.useState(localStorage.getItem("formSubmitted") === "true");
	const [loading, setLoading] = React.useState(false);
	const [isAuthenticated, setIsAuthenticated] = React.useState(false); // State for authentication
	const [redirect, setRedirect] = React.useState(false);

	// Set up authentication listener
	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setIsAuthenticated(!!user);
		});
		return () => unsubscribe();
	}, []);

	React.useEffect(() => {
		if (redirect) {
			navigate("/signup"); // Redirect to sign-up page if needed
		}
	}, [redirect, navigate]);

	const handleFieldFocus = () => {
		if (!isAuthenticated) {
			navigate("/login"); // Redirect to login page if user is not authenticated
		}
	};

	const onSubmit = async (data) => {
		if (!isAuthenticated) {
			setRedirect(true); // Set redirect flag to true if user is not authenticated
			return;
		}

		setLoading(true);
		try {
			// Save the data to Firestore
			await setDoc(doc(db, "submissions", new Date().toISOString()), data);
			// Set a cookie indicating the form has been submitted
			setCookie("formSubmitted", "true", { path: "/" });
			// Save flag to localStorage to show thank you message on page refresh
			localStorage.setItem("formSubmitted", "true");
			// Show the success message
			setSuccess(true);
		} catch (error) {
			console.error("Error saving form data: ", error);
		} finally {
			setLoading(false);
		}
	};

	// If the form is successfully submitted, display the thank you message
	if (success) {
		return (
			<FormWrapper>
				<Typography variant="h6" align="center">
					<CheckCircleIcon color="success" style={{ fontSize: 40 }} />
					<br />
					Thank you for your response. Our team will contact you soon on the provided contact information.
				</Typography>
			</FormWrapper>
		);
	}

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
								pattern: {
									value: /^[A-Za-z]+$/,
									message: "First name must contain only letters",
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
									onFocus={handleFieldFocus}
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
								pattern: {
									value: /^[A-Za-z]+$/,
									message: "Last name must contain only letters",
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
									onFocus={handleFieldFocus}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Controller
							name="email"
							control={control}
							defaultValue=""
							rules={{
								required: "Email is required",
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
									message: "Invalid email address",
								},
							}}
							render={({ field }) => (
								<BrighterBlueBorderTextField
									{...field}
									label="Email"
									variant="outlined"
									fullWidth
									error={!!errors.email}
									helperText={errors.email ? errors.email.message : ""}
									onFocus={handleFieldFocus}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Controller
							name="phoneNumber"
							control={control}
							defaultValue=""
							rules={{
								required: "Phone number is required",
								minLength: {
									value: 10,
									message: "Must be at least 10 digits",
								},
								maxLength: {
									value: 15,
									message: "Phone number cannot exceed 15 digits",
								},
								pattern: {
									value: /^[0-9]+$/,
									message: "Phone number must contain only digits",
								},
							}}
							render={({ field }) => (
								<BrighterBlueBorderTextField
									{...field}
									label="Phone Number"
									variant="outlined"
									fullWidth
									error={!!errors.phoneNumber}
									helperText={errors.phoneNumber ? errors.phoneNumber.message : ""}
									onFocus={handleFieldFocus}
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
									error={!!errors.emergencyContactNumber}
									helperText={errors.emergencyContactNumber ? errors.emergencyContactNumber.message : ""}
									onFocus={handleFieldFocus}
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
									onFocus={handleFieldFocus}
								>
									{countries.map((option) => (
										<MenuItem key={option} value={option}>
											{option}
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
							defaultValue={states[watchCountry][0]}
							render={({ field }) => (
								<BrighterBlueBorderTextField
									{...field}
									select
									label="State/Province"
									variant="outlined"
									fullWidth
									onFocus={handleFieldFocus}
								>
									{states[watchCountry].map((option) => (
										<MenuItem key={option} value={option}>
											{option}
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
							defaultValue={roles[0]}
							render={({ field }) => (
								<BrighterBlueBorderTextField
									{...field}
									select
									label="Role"
									variant="outlined"
									fullWidth
									onFocus={handleFieldFocus}
								>
									{roles.map((option) => (
										<MenuItem key={option} value={option}>
											{option}
										</MenuItem>
									))}
								</BrighterBlueBorderTextField>
							)}
						/>
					</Grid>
					<Grid item xs={12}>
						<Controller
							name="questionsConcerns"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<BrighterBlueBorderTextField
									{...field}
									label="Questions and Concerns"
									variant="outlined"
									multiline
									rows={4}
									fullWidth
									onFocus={handleFieldFocus}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							disabled={loading}
						>
							{loading ? <CircularProgress size={24} /> : "Submit"}
						</Button>
					</Grid>
				</Grid>
			</form>
		</FormWrapper>
	);
}
