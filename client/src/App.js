import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Wrapper>
					<Route exact path="/" component={Home} />
					<Route exact path="home" component={Home} />
					<Route exact path="/createuser" component={CreateUser} />
					<Route exact path="/login" component={Login} />
				</Wrapper>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
