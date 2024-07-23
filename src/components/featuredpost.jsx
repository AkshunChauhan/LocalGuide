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
  borderRadius: theme.shape.borderRadius, // Rounded corners
  boxShadow: theme.shadows[1], // Light shadow for a dark theme
}));

const DarkCardActionArea = styled(CardActionArea)({
  borderRadius: 'inherit', // Ensure the rounded corners are inherited
  '&:hover': {
    backgroundColor: '#333333', // Slightly lighter dark background on hover
  },
});

const DarkCardMedia = styled(CardMedia)({
  filter: 'brightness(0.7)', // Slightly darken image to match the theme
  borderRadius: 'inherit', // Ensure the rounded corners are inherited
});

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <DarkCardActionArea component="a" href="#">
        <DarkCard>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          {post.image && (
            <DarkCardMedia
              component="img"
              sx={{ width: 160, display: { xs: "none", sm: "block" } }}
              image={post.image}
              alt={post.imageLabel}
            />
          )}
        </DarkCard>
      </DarkCardActionArea>
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
  }).isRequired,
};

export default FeaturedPost;
