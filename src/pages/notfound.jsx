import React from "react";
import "./NotFound.css";
import { NavLink } from "react-router-dom";

export default function NotFound() {
	return (
		<>
			<div id="notfound">
				<div className="notfound">
					<div className="notfound-404">
						<h1>404</h1>
					</div>
					<h2>we are sorry, page not found!</h2>
					<p>
						The page you are looking for might have been removed, had its name
						change or is temporarily unavalable.
					</p>
					<NavLink to="/">Back TO Homepage </NavLink>
				</div>
			</div>
		</>
	);
}
