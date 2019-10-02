import React from "react";
import { Container } from "reactstrap";
//import Container from "../components/Container";
import "./style.css";

function Footer() {
	return (
		<div className="mainfooter row col-lg-12">
			<Container>
				<footer className="footer" data-background-color="black">
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

					<div className="copyright" id="copyright">© KonnectD 2019</div>
				</footer>
			</Container>
		</div>
	);
}

export default Footer;
