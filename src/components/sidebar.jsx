import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink for internal navigation

function Sidebar(props) {
  const { description, title, aboutLink } = props;

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
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  aboutLink: PropTypes.string.isRequired, // Add aboutLink to PropTypes
};

export default Sidebar;
