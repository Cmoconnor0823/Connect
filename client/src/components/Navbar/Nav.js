import React from "react";
import './style.css';
import { Container } from "reactstrap";

function Nav() {
	return (
		<Container>
			<nav className="navbar navbar-expand-lg navbar-dark">
				<div className="navbar-brand col-lg-3"><h2>KonnectD</h2></div>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">

					<ul className="navbar-nav mr-auto pages float-left">
						<li className="nav-item active">
							<a className="nav-link" href="/home">  Home <span className="sr-only"></span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/login"> Log In  </a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/createUser"> Create a Profile  </a>
						</li>
					</ul>
					{/* <li className="nav-item">
						<a className="nav-link" href="/"> Home </a> </li>*/}

				</div>
			</nav>
		</Container>


	);
}

export default Nav;