import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink for internal navigation
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Sidebar(props) {
  const { description, title, aboutLink, socialLinks = {} } = props; // Provide default empty object for socialLinks

  // Ensure socialLinks have default values if not provided
  const socialLinksWithDefaults = {
    facebook: socialLinks.facebook || '#',
    twitter: socialLinks.twitter || '#',
    instagram: socialLinks.instagram || '#',
    linkedin: socialLinks.linkedin || '#',
  };

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: '#f0f0f0' }}> {/* Lighter gray background */}
        <Typography variant="h6" gutterBottom sx={{ color: '#000000' }}> {/* Darker gray text */}
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#000000',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 3 // Adjust the number of lines to show
          }}
        >
          {description}
        </Typography>

        {/* About Section */}
        <Link
          component={RouterLink}
          to={aboutLink} // Navigate to the about page
          variant="body1"
          sx={{ display: 'block', mt: 1, color: '#0056b3', '&:hover': { color: '#003d7a' } }} // Bright blue with darker blue on hover
        >
          Learn more about us
        </Link>

        {/* Social Media Icons */}
        <Stack direction="row" spacing={2} sx={{ mt: 4 }}> {/* Adjust mt value for spacing */}
          <Link href={socialLinksWithDefaults.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookIcon sx={{ color: '#4267B2', '&:hover': { color: '#365899' } }} />
          </Link>
          <Link href={socialLinksWithDefaults.twitter} target="_blank" rel="noopener noreferrer">
            <TwitterIcon sx={{ color: '#1DA1F2', '&:hover': { color: '#0d95e8' } }} />
          </Link>
          <Link href={socialLinksWithDefaults.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{ color: '#C13584', '&:hover': { color: '#bc2a8d' } }} />
          </Link>
          <Link href={socialLinksWithDefaults.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ color: '#0077b5', '&:hover': { color: '#005582' } }} />
          </Link>
        </Stack>
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  aboutLink: PropTypes.string.isRequired, // Add aboutLink to PropTypes
  socialLinks: PropTypes.shape({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
  }), // socialLinks is no longer required
};

export default Sidebar;
