import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const TypingText = styled(Typography)(({ theme }) => ({
  fontSize: '2rem', // Adjust size as needed
  whiteSpace: 'pre', // Preserve whitespace
  overflow: 'hidden', // Hide overflow
  display: 'inline-block', // Allows animation
  borderRight: '2px solid', // Cursor effect
  animation: 'blink 1s step-end infinite', // Blinking cursor
  '@keyframes blink': {
    '0%': { borderColor: 'transparent' },
    '100%': { borderColor: 'white' },
  },
}));

function TypingEffect({ messages, speed = 100, deleteSpeed = 50 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[currentIndex];
    const typingSpeed = isDeleting ? deleteSpeed : speed;
    const maxLength = currentMessage.length;

    const timer = setInterval(() => {
      setDisplayedText(prev => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return currentMessage.slice(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayedText.length === maxLength) {
        setIsDeleting(true);
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % messages.length);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [displayedText, currentIndex, isDeleting, messages, speed, deleteSpeed]);

  return <TypingText>{displayedText}</TypingText>;
}

export default function MainFeaturedPost() {
  const messages = [
    "Hi, welcome to the local guide.",
    "This site will help you to find local people who will help you in exploring the new city.",
    "You don't have to worry about anything; we got your back."
  ];

  return (
    <Box sx={{ p: 3, textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>
      <TypingEffect messages={messages} />
    </Box>
  );
}
