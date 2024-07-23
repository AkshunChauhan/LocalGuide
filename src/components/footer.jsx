import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button"; // Import Button component
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // Import icons for social media

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.linkedin.com/in/akshunchauhan/">
        Akshun Chauhan
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: '#1e1e1e', py: 6 }}> {/* Dark background for the footer */}
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom sx={{ color: '#ffffff' }}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          sx={{ color: '#ffffff' }}
        >
          {description}
        </Typography>

        {/* Navigation Links */}
        <Stack direction="row" spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          <Link href="#" color="inherit">Home</Link>
          <Link href="#" color="inherit">About</Link>
          <Link href="#" color="inherit">Services</Link>
          <Link href="#" color="inherit">Contact</Link>
          <Link href="#" color="inherit">Privacy Policy</Link>
        </Stack>

        {/* Contact Information */}
        <Typography variant="body2" align="center" sx={{ mt: 2, color: '#ffffff' }}>
          <Link href="mailto:contact@example.com" color="inherit">contact@example.com</Link> |
          <Link href="tel:+1234567890" color="inherit"> +1 (234) 567-890</Link>
        </Typography>

        {/* Social Media Links */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Link href="#" color="inherit">
            <Facebook sx={{ fontSize: 30, color: '#ffffff' }} />
          </Link>
          <Link href="#" color="inherit">
            <Twitter sx={{ fontSize: 30, color: '#ffffff' }} />
          </Link>
          <Link href="#" color="inherit">
            <Instagram sx={{ fontSize: 30, color: '#ffffff' }} />
          </Link>
          <Link href="#" color="inherit">
            <LinkedIn sx={{ fontSize: 30, color: '#ffffff' }} />
          </Link>
        </Stack>

        {/* Newsletter Signup */}
        <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
          <Typography variant="body2" align="center" sx={{ color: '#ffffff' }}>
            Subscribe to our newsletter
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <input type="email" placeholder="Your email" style={{ padding: '8px', borderRadius: '4px' }} />
            <Button variant="contained" sx={{ backgroundColor: '#0056b3', color: '#ffffff' }}>
              Subscribe
            </Button>
          </Stack>
        </Stack>

        {/* Legal Information */}
        <Typography variant="body2" align="center" sx={{ mt: 2, color: '#ffffff' }}>
          <Link href="#" color="inherit">Terms of Service</Link> |
          <Link href="#" color="inherit">Privacy Policy</Link>
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
