
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Blog from "./pages/blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notfound";
import LoadingBarContainer from "./components/LoadingBarContainer";
import './design/global.css';

function App() {

	return (
		<>
			<BrowserRouter>
				<LoadingBarContainer />
				<Routes>
					<Route path="/" element={<Blog />} exact />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
