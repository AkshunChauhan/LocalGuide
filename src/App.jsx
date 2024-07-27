
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Blog from "./pages/blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notfound";
import AboutPage from "./pages/Aboutpgae";
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import LoadingBarContainer from "./components/LoadingBarContainer";
import './design/global.css';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <>
      <BrowserRouter>
        <LoadingBarContainer />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;