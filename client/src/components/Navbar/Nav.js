import React from "react";

function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<a className="navbar-brand" href="/">
        Home
			</a>
			<br></br>
			<a className="navbar-brand" href="/createuser">
        Create a Profile
			</a>
			<br></br>
			<a className="navbar-brand" href="/login">
        Log In
			</a>
			{/* <a className="navbar-brand" href="/">
        Home
			</a> */}
		</nav>
	);
}

export default Nav;