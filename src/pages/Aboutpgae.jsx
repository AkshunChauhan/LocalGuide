// src/components/AboutPage.jsx
import * as React from "react";
import { Container, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Flage from "../components/flage";

const AboutPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div> <Navbar />
            <Flage />
            <Container maxWidth="md">
                <Paper style={{ padding: 20 }}>
                    <Typography variant="h4" gutterBottom>
                        About The Local Guide Red Deer
                    </Typography>
                    <Typography paragraph>
                        Welcome to The Local Guide Red Deer, your ultimate resource for international students arriving in Red Deer, Alberta. Designed exclusively for Red Deer, this site aims to connect newcomers with essential local services. Whether you're seeking accommodation, transportation options, grocery stores, or guidance on settling into the community, The Local Guide Red Deer provides comprehensive assistance. Our platform ensures that international students have everything they need to thrive in Red Deer, fostering a smooth and welcoming transition to life in this vibrant city.
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleBack}>
                        Back to Home
                    </Button>
                </Paper>
            </Container>
        </div>
    );
};

export default AboutPage;
