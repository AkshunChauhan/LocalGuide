import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // Import icons for social media
import { styled } from "@mui/material/styles";
import logo from '../assets/logo.png'; // Import the logo image

const Logo = styled('img')({
  width: '100px', // Adjust size to reduce the logo size
  height: 'auto',
  display: 'block',
  margin: '0 auto',
});

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.local-guide-403.web.app">
        Local Guide
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: '#1e1e1e', py: 6 }}>
      <Container maxWidth="lg">
        {/* Logo */}
        <Logo src={logo} alt="Local Guide Logo" />

        <Typography variant="h6" align="center" gutterBottom sx={{ color: '#ffffff', mt: 2 }}>
          The Local Guide
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          sx={{ color: '#ffffff' }}
        >
          Start your life in Red Deer without worrying about a thing
        </Typography>

        {/* Navigation Links */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={4}
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          <Link href="/" color="inherit">Home</Link>
          <Link href="/about" color="inherit">About</Link>
          <Link href="#" color="inherit">Services</Link>
          <Link href="#" color="inherit">Contact</Link>
          <Link href="/privacy-policy" color="inherit">Privacy Policy</Link>
        </Stack>

        {/* Contact Information */}
        <Typography variant="body2" align="center" sx={{ mt: 2, color: '#ffffff' }}>
          <Link href="mailto:contact@example.com" color="inherit">contact@example.com</Link> |
          <Link href="tel:+1234567890" color="inherit"> +1 (234) 567-890</Link>
        </Typography>

        {/* Social Media Links */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          <Link href="https://facebook.com/your-profile" color="inherit" target="_blank" rel="noopener noreferrer">
            <Facebook sx={{ fontSize: { xs: 24, sm: 30 }, color: '#ffffff' }} />
          </Link>
          <Link href="https://twitter.com/your-profile" color="inherit" target="_blank" rel="noopener noreferrer">
            <Twitter sx={{ fontSize: { xs: 24, sm: 30 }, color: '#ffffff' }} />
          </Link>
          <Link href="https://instagram.com/your-profile" color="inherit" target="_blank" rel="noopener noreferrer">
            <Instagram sx={{ fontSize: { xs: 24, sm: 30 }, color: '#ffffff' }} />
          </Link>
          <Link href="https://linkedin.com/in/your-profile" color="inherit" target="_blank" rel="noopener noreferrer">
            <LinkedIn sx={{ fontSize: { xs: 24, sm: 30 }, color: '#ffffff' }} />
          </Link>
        </Stack>

        {/* Legal Information */}
        <Typography variant="body2" align="center" sx={{ mt: 2, color: '#ffffff' }}>
          <Link href="/terms-of-service" color="inherit">Terms of Service</Link> |
          <Link href="/privacy-policy" color="inherit">Privacy Policy</Link>
        </Typography>

        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
