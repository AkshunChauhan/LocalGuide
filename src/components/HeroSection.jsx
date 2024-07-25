import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TypingEffect from './TypingEffect'; // Ensure TypingEffect is correctly imported

// Import the image correctly
import HeroImageSrc from '../assets/background.png'; // Adjust path if needed

const HeroImage = styled('img')({
    width: '100%',
    height: 'auto',
    maxWidth: '600px', // Adjust as needed
    borderRadius: '8px',
});

const TypingTextContainer = styled(Box)({
    color: '#fff',
    maxWidth: '600px', // Adjust as needed
    textAlign: 'left', // Align text to the left
    width: '100%', // Ensure it takes full width of the container
});

export default function HeroSection() {
    return (
        <Grid container sx={{ minHeight: '100vh', backgroundColor: '#000', p: 4 }}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TypingTextContainer>
                    <Typography variant="h3" color="white">
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
        </Grid>
    );
}
