import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useState } from "react";
import Bg from '../assets/background.png';

function MainFeaturedPost(props) {
  const { post } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container justifyContent="center" sx={{ px: 2 }}>
      <Grid item xs={12} md={12}>
        <Paper
          sx={{
            position: "relative",
            backgroundColor: "#000000",
            color: "#fff",
            mb: 4,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${post.image})`,
          }}
        >
          {
            <img
              style={{ display: "none" }}
              src={post.image}
              alt={post.imageText}
            />
          }
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.3)",
            }}
          />
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              textAlign: 'center', // Center align the text
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {expanded ? post.description : `${post.description.slice(0, 150)}...`}
              <Link
                component="button"
                variant="subtitle1"
                onClick={handleExpandClick}
                sx={{ cursor: 'pointer', color: '#fff', ml: 1 }}
              >
                {expanded ? 'Show less' : post.linkText}
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
