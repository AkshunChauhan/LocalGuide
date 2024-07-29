import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";

// Styled components for the dark theme with rounded corners
const DarkCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1e1e1e', // Dark background
  color: '#ffffff', // Light text color
  borderRadius: '16px', // More rounded corners
  boxShadow: theme.shadows[1], // Light shadow for a dark theme
  height: '300px', // Increase the height of the card
  position: 'relative', // Position relative for absolute child elements
  overflow: 'hidden' // Hide overflow to maintain rounded corners
}));

const DarkCardActionArea = styled(CardActionArea)({
  borderRadius: 'inherit', // Ensure the rounded corners are inherited
  position: 'absolute', // Cover the entire card
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  '&:hover': {
    backgroundColor: 'transparent', // Remove background color change on hover
  },
});

const DarkCardMedia = styled(CardMedia)({
  filter: 'brightness(0.5)', // Slightly darken image to match the theme
  position: 'absolute', // Position absolutely to cover entire card
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0 // Set z-index to ensure it stays behind the content
});

const CardContentOverlay = styled(CardContent)({
  position: 'relative', // Position relative to overlay on top of the background
  zIndex: 1, // Set z-index to ensure it stays on top of the background
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Optional: Add semi-transparent background for readability
  borderRadius: 'inherit', // Ensure the rounded corners are inherited
  height: '100%', // Match the height of the card
});

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <DarkCard>
        <DarkCardActionArea component="a" href={post.link}>
          {post.image && (
            <DarkCardMedia
              component="img"
              image={post.image}
              alt={post.imageLabel}
            />
          )}
          <CardContentOverlay>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="#FFA500">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContentOverlay>
        </DarkCardActionArea>
      </DarkCard>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    imageLabel: PropTypes.string,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired, // Link to the post or content
  }).isRequired,
};

export default FeaturedPost;
