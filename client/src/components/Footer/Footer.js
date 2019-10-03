import React from "react";
import "./style.css";
import { Container } from "reactstrap";

function Footer() {
	return (
			<Container>
				<footer className="footer navbar-expand-lg navbar-dark">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto pages float-left">
						<li className="nav-item active">
							<a className="navbar-brand" href="/home">
								Home
			</a>
						</li>
						<li className="nav-item">
							<a className="navbar-brand" href="/login">
								Log In
			</a>
						</li>
						<li className="nav-item">
							<a className="navbar-brand" href="/createuser">
								Create a Profile
			</a>
						</li>
						{/* <li>
				<a className="navbar-brand" href="/">
				Home
				</a> 
			</li>*/}
				<div className="navbar-brand copyright col-lg-3" id="copyright"><h4>© KonnectD 2019</h4></div>
					</ul>
					</div>
				</footer>
			</Container>
	);
}

export default Footer;
