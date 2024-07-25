import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
    title: "🌟 Welcome to Alberta, Canada! 🌟",
    date: "🎉 Announcement for Incoming International Students! 🎉",
    description:
      "We are thrilled to welcome you to Canada and make your transition smoother and more enjoyable. Starting this August, we are launching our essential services to assist you upon your arrival in Alberta. Our goal is to provide you with all the support you need to settle in comfortably and confidently. Stay tuned for more updates, and get ready for an incredible journey ahead!",
    image: image1, // Use imported image
    imageLabel: "Image Text",
  },
  {
    title: "🌟 Red Deer, AB Canada 🌟",
    date: "Nov 11",
    description:
      "If you are headed to the vibrant city of Red Deer, Alberta, and don't know anyone there, don't worry! We've got your back. Our comprehensive package includes all the essentials you need, Our goal is to provide you with all the support you need to settle in comfortably and confidently, with no hidden charges. Start your new life in Red Deer now without worrying about a thing.",
    image: image2, // Use imported image
    imageLabel: "Image Text",
  },
];

const socialLinks = [
  { name: "Facebook", icon: FacebookIcon, url: "https://facebook.com/your-profile", color: "#1877f2" },
  { name: "Twitter", icon: TwitterIcon, url: "https://twitter.com/your-profile", color: "#1da1f2" },
  { name: "Instagram", icon: InstagramIcon, url: "https://instagram.com/your-profile", color: "#c13584" },
  { name: "LinkedIn", icon: LinkedInIcon, url: "https://linkedin.com/in/your-profile", color: "#0077b5" },
];

export default function Blog() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <main>
          <HeroSection /> {/* Add the HeroSection component here */}

          {/* Social Media Section */}
          <div style={{
            marginTop: '2rem',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            <div>
              {socialLinks.map((network) => (
                <a
                  key={network.name}
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginRight: '1rem',
                    color: network.color,
                    fontSize: '2rem', // Increase icon size
                    padding: '0.5rem', // Add padding to icons
                  }}
                >
                  <network.icon fontSize="inherit" />
                </a>
              ))}
            </div>
          </div>

          <Grid container spacing={3}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="About" />
            <Sidebar
              title="About"
              description="Welcome to The Local Guide Red Deer, your ultimate resource for international students arriving in Red Deer, Alberta. Designed exclusively for Red Deer, this site aims to connect newcomers with essential local services. Whether you're seeking accommodation, transportation options, grocery stores, or guidance on settling into the community, The Local Guide Red Deer provides comprehensive assistance. Our platform ensures that international students have everything they need to thrive in Red Deer, fostering a smooth and welcoming transition to life in this vibrant city."
              social={socialLinks}
              aboutLink="/about" // Add link to About page
            />
          </Grid>
          <Flage />
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
