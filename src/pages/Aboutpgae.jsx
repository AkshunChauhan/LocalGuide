import * as React from "react";
import { Container, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Flage from "../components/flage";
import FeedbackForm from "../components/feedback"; // Ensure this path is correct
import { styled } from "@mui/material/styles";

// Styled component for Paper with dark theme
const DarkPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1e1e1e', // Dark background
    color: '#ffffff', // White text
    padding: theme.spacing(4),
    margin: theme.spacing(2, 0),
    boxShadow: theme.shadows[1], // Light shadow for a dark theme
}));

// Styled component for Button with dark theme
const DarkButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#0056b3', // Brighter blue background
    color: '#ffffff', // White text
    '&:hover': {
        backgroundColor: '#004494', // Darker blue on hover
    },
}));

const AboutPage = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        // Check if the cookie is set
        const hasSubmitted = document.cookie.split(';').some((item) => item.trim().startsWith('hasSubmitted='));
        if (hasSubmitted) {
            // Redirect or show a message if already submitted
            navigate('/thank-you'); // Adjust the route as needed
        }
    }, [navigate]);

    const handleBack = () => {
        // Set a cookie to indicate the page has been submitted
        document.cookie = "hasSubmitted=true; path=/";
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div>
            <Navbar />
            <Flage />
            <Container maxWidth="md">
                {/* About Section */}
                <DarkPaper>
                    <Typography variant="h4" gutterBottom>
                        About The Local Guide Red Deer
                    </Typography>
                    <Typography paragraph>
                        We are a startup based in Red Deer, Alberta, founded by alumni of Red Deer Polytechnic. As a for-profit organization, our mission is to assist international students who face common challenges upon arriving in Canada. Drawing from our personal experiences and understanding of these issues, we aim to provide comprehensive support and guidance to help you settle into Red Deer smoothly and confidently.
                    </Typography>
                    <Typography paragraph>
                        All rights reserved to the original founders of The Local Guide Red Deer. We are committed to making this platform a trustworthy and valuable resource for international students. If you would like to learn more about us or have any questions, please consider reaching out to us via email.
                    </Typography>
                    <Typography paragraph>
                        <strong>Contact Us:</strong><br />
                        Email: <a href="mailto:info@localguide-reddeer.ca" style={{ color: '#00aaff' }}>info@localguide-reddeer.ca</a><br />
                        Phone: +1 (123) 456-7890
                    </Typography>
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <DarkButton variant="contained" onClick={handleBack}>
                            Back to Home
                        </DarkButton>
                    </div>
                </DarkPaper>
                <FeedbackForm />
            </Container>
            <Footer />
        </div>
    );
};

export default AboutPage;
