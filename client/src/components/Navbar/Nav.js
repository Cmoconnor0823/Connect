import React from "react";
import './style.css';
import { Input, FormBtn } from "../Form";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import LoginControl from "../RenderLogButton";

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
				<Navbar color="faded" dark expand="md">
					<NavbarBrand href="/" className="mr-auto">KonnectD</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/home">Home</NavLink>
							</NavItem>
							<NavItem>
							<LoginControl/>
							</NavItem>
							<NavItem>
								<NavLink href="/createUser">Create a Profile</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/about">About</NavLink>
							</NavItem>
							{/* <NavItem>
								<NavLink href="https://github.com/Cmoconnor0823/Connect">GitHub</NavLink>
							</NavItem> */}
						</Nav>
					</Collapse>
				</Navbar>
		);
	}
}

Navbar.propTypes = {
	light: PropTypes.bool,
	dark: PropTypes.bool,
	fixed: PropTypes.string,
	color: PropTypes.string,
	role: PropTypes.string,
	expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	// pass in custom element to use
  }

export default NavBar;