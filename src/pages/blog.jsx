import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import MainFeaturedPost from "../components/mainfeaturedpost";
import FeaturedPost from "../components/featuredpost";
import Main from "../components/main";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Flage from "../components/flage";
import Form from "../components/Form";
import HeroSection from "../components/HeroSection"; // Import the HeroSection component

import image1 from "../assets/image1.jpg"; // Adjust the path according to your project structure
import image2 from "../assets/image2.jpg"; // Adjust the path according to your project structure

const mainFeaturedPost = {
  title: "The Local Guide Red Deer",
  description: "",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: image1, // Use imported image
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: image2, // Use imported image
    imageLabel: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "Welcome to The Local Guide Red Deer, your ultimate resource for international students arriving in Red Deer, Alberta. Designed exclusively for Red Deer, this site aims to connect newcomers with essential local services. Whether you're seeking accommodation, transportation options, grocery stores, or guidance on settling into the community, The Local Guide Red Deer provides comprehensive assistance. Our platform ensures that international students have everything they need to thrive in Red Deer, fostering a smooth and welcoming transition to life in this vibrant city.",
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "X", icon: XIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Blog() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <main>
          <HeroSection /> {/* Add the HeroSection component here */}
          <Flage />
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid container spacing={3}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
              aboutLink="/about" // Add link to About page
            />
          </Grid>
          <Grid item xs={12}>
            <Form />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}
