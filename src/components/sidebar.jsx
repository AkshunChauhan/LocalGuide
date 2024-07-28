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
import YouTubeIcon from '@mui/icons-material/YouTube';

function Sidebar(props) {
  const { description, title, aboutLink, termsLink, socialLinks = {} } = props;

  // Ensure socialLinks have default values if not provided
  const socialLinksWithDefaults = {
    facebook: socialLinks.facebook || 'https://www.facebook.com/profile.php?id=61563500187171',
    YouTube: socialLinks.youtube || 'https://www.youtube.com/channel/UCMIyYjk51pHLo_Yt9v-dsUw',
    instagram: socialLinks.instagram || 'https://www.instagram.com/localguidereddeer/',
    linkedin: socialLinks.linkedin || 'https://www.linkedin.com/company/104102674/admin/dashboard/',
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
          to={aboutLink}
          variant="body1"
          sx={{ display: 'block', mt: 1, color: '#0056b3', '&:hover': { color: '#003d7a' } }} // Bright blue with darker blue on hover
        >
          Learn more about us
        </Link>
      </Paper>

      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Link href={socialLinksWithDefaults.facebook} target="_blank" rel="noopener noreferrer">
          <FacebookIcon sx={{ color: '#4267B2', '&:hover': { color: '#365899' } }} />
        </Link>
        <Link href={socialLinksWithDefaults.twitter} target="_blank" rel="noopener noreferrer">
          <YouTubeIcon sx={{ color: '#ff0000', '&:hover': { color: '#ff0000' } }} />
        </Link>
        <Link href={socialLinksWithDefaults.instagram} target="_blank" rel="noopener noreferrer">
          <InstagramIcon sx={{ color: '#C13584', '&:hover': { color: '#bc2a8d' } }} />
        </Link>
        <Link href={socialLinksWithDefaults.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon sx={{ color: '#0077b5', '&:hover': { color: '#005582' } }} />
        </Link>
      </Stack>

      {/* Terms and Conditions Section */}
      <Paper elevation={0} sx={{ p: 2, bgcolor: '#e0e0e0', mt: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#000000' }}>
          Terms and Conditions
        </Typography>
        <Typography variant="body1" sx={{ color: '#000000' }}>
          The package terms are summarized as follows:
          <ul>
            <li>Non-refundable once services have commenced.</li>
            <li>Airport pickup is available from Edmonton and Calgary airports only.</li>
            <li>Accommodation includes a two-week stay; long-term accommodation assistance is provided after this period.</li>
            <li>Basic groceries are provided, but specific dietary needs are not covered.</li>
            <li>Shopping assistance is guided but does not cover purchase costs.</li>
            <li>Document preparation assistance is limited to guidance; legal services are not provided.</li>
            <li>Orientation includes a one-time tour and guidance session.</li>
            <li>Utensils and cutlery are basic and sufficient for one person.</li>
          </ul>
          <Link
            component={RouterLink}
            to={termsLink}
            variant="body1"
            sx={{ display: 'block', mt: 2, color: '#0056b3', '&:hover': { color: '#003d7a' } }} // Bright blue with darker blue on hover
          >
            Read more
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  aboutLink: PropTypes.string.isRequired,
  termsLink: PropTypes.string.isRequired, // Add termsLink to PropTypes
  socialLinks: PropTypes.shape({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
  }), // socialLinks is no longer required
};

export default Sidebar;
