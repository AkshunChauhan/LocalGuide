import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TypingEffect from './TypingEffect'; // Ensure TypingEffect is correctly imported
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Import the image correctly
import HeroImageSrc from '../assets/background.png'; // Adjust path if needed

const HeroImage = styled('img')({
    width: '100%',
    height: 'auto',
    maxWidth: '100%', // Adjust as needed
    borderRadius: '8px',
    // Ensure responsiveness
    '@media (max-width:600px)': {
        maxWidth: '90%',
    },
});

const TypingTextContainer = styled(Box)({
    color: '#fff',
    maxWidth: '100%', // Ensure it takes full width of the container
    textAlign: 'left', // Align text to the left
    width: '100%', // Ensure it takes full width of the container
    fontFamily: 'Vergilia', // Apply title font
    overflow: 'hidden', // Hide overflow
    // Ensure responsiveness
    '@media (max-width:600px)': {
        textAlign: 'center',
        fontSize: 'clamp(1rem, 4vw, 1.5rem)', // Adjust font size for smaller screens
    },
});

const SocialMediaContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    marginBottom: '2rem',
    width: '100%', // Ensure it takes full width of the container
    // Ensure responsiveness
    '@media (max-width:600px)': {
        justifyContent: 'center',
    },
});

const socialLinks = [
    { name: "Facebook", icon: FacebookIcon, url: "https://facebook.com/your-profile", color: "#1877f2" },
    { name: "Twitter", icon: TwitterIcon, url: "https://twitter.com/your-profile", color: "#1da1f2" },
    { name: "Instagram", icon: InstagramIcon, url: "https://instagram.com/your-profile", color: "#c13584" },
    { name: "LinkedIn", icon: LinkedInIcon, url: "https://linkedin.com/in/your-profile", color: "#0077b5" },
];

export default function HeroSection() {
    return (
        <Grid container sx={{ minHeight: '50vh', backgroundColor: '#000', p: 2 }}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TypingTextContainer>
                    <Typography variant="h3" color="white" sx={{ fontFamily: 'Vergilia' }}>
                        <TypingEffect
                            messages={[
                                "Hi, welcome to the local guide.",
                                "This site will help you to find local \n people who will help you in \nexploring the new city.",
                                "You don't have to worry about \n anything; we got your back."
                            ]}
                            speed={100}
                            deleteSpeed={50}
                        />
                    </Typography>
                </TypingTextContainer>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <HeroImage src={HeroImageSrc} alt="Hero Image" /> {/* Use imported image */}
            </Grid>
            {/* Social Media Section */}
            <SocialMediaContainer>
                {socialLinks.map((network) => (
                    <a
                        key={network.name}
                        href={network.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            marginRight: '1rem',
                            color: network.color,
                            fontSize: '3rem', // Increase icon size
                            padding: '0.5rem', // Add padding to icons
                        }}
                    >
                        <network.icon fontSize="inherit" />
                    </a>
                ))}
            </SocialMediaContainer>
        </Grid>
    );
}
