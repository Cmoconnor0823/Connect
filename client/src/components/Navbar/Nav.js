import React from "react";

function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<ul>
				<li>


					<a className="navbar-brand" href="/">
						Home
			</a>
				</li>
				<li>
					<a className="navbar-brand" href="/createuser">
						Create a Profile
			</a>
				</li>
				<li>
					<a className="navbar-brand" href="/login">
						Log In
			</a>
				</li>
			{/* <li>
				<a className="navbar-brand" href="/">
        Home
	</a> 
				</li>*/}
			</ul>
		</nav >
	);
}

export default Nav;