import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const LoadingBarContainer = () => {
	const [progress, setProgress] = useState(0);
	const location = useLocation();

	useEffect(() => {
		setProgress(100);
		setTimeout(() => {
			setProgress(0);
		}, 1000);
	}, [location]);

	return <LoadingBar color="#f11946" progress={progress} />;
};

export default LoadingBarContainer;
