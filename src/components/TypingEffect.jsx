import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const TypingText = styled(Typography)(({ theme }) => ({
    fontSize: 'clamp(1.5rem, 5vw, 2rem)', // Responsive font size
    whiteSpace: 'pre-wrap', // Preserve whitespace and wrap text
    display: 'inline-block', // Allows animation
    position: 'relative', // For absolute positioning of the cursor
    '&::after': {
        content: '""',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '2px',
        backgroundColor: 'white', // Cursor color
        animation: 'blink 1s step-end infinite', // Blinking cursor
    },
    '@keyframes blink': {
        '0%': { opacity: 1 },
        '50%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
}));

function TypingEffect({ messages, speed = 100, deleteSpeed = 50 }) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentMessage = messages[currentIndex];
        const typingSpeed = isDeleting ? deleteSpeed : speed;

        const handleTyping = () => {
            setDisplayedText(prev => {
                if (isDeleting) {
                    return prev.slice(0, -1);
                } else {
                    return currentMessage.slice(0, prev.length + 1);
                }
            });

            if (!isDeleting && displayedText.length === currentMessage.length) {
                setIsDeleting(true);
            } else if (isDeleting && displayedText.length === 0) {
                setIsDeleting(false);
                setCurrentIndex(prev => (prev + 1) % messages.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, currentIndex, isDeleting, messages, speed, deleteSpeed]);

    return (
        <div style={{ height: '8rem', display: 'flex', alignItems: 'center' }}> {/* Adjust this height as needed */}
            <TypingText>{displayedText}</TypingText>
        </div>
    );
}

export default TypingEffect;
