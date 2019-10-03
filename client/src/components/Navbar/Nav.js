import React from "react";
import './style.css';

function Nav() {
	return (

		<div className="mainNav row col-lg-12">
		<nav className="navbar navbar-expand-lg navbar-dark">
		  <div className="navbar-brand col-lg-3"><h2>KonnectD</h2></div>
		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			
			<ul className="navbar-nav mr-auto pages float-left">
			  <li className="nav-item active">
				<a className="nav-link" href="/">  HOME <span className="sr-only"></span></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="/Login"> Log In  </a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="/CreateUser"> Create User  </a>
			  </li>
			</ul>
    {/* <li className="nav-item">
				<a className="nav-link" href="/">
        Home
	</a> 
				</li>*/}
			
		  </div>
		</nav>
	  </div>

	);
}

export default Nav;