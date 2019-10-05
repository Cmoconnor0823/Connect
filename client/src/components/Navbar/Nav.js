import React from "react";
import './style.css';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	render() {
		return (
			<Container>
				<Navbar color="faded" dark>
					<NavbarBrand href="/" className="mr-auto">KonnectD</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink href="/home">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/login">Log In</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/createUser">Create a Profile</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/Cmoconnor0823/Connect">GitHub</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
					{/* <ul className="navbar-nav mr-auto pages float-left">
						<li className="nav-item active">
							<a className="nav-link" href="/home">  Home <span className="sr-only"></span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/login"> Log In  </a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/createUser"> Create a Profile  </a>
						</li>
					</ul> */}
					{/* <li className="nav-item">
						<a className="nav-link" href="/"> Home </a> </li>*/}
				</Navbar>
			</Container>


		);
	}
}

export default NavBar;