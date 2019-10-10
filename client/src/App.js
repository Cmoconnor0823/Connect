import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch} from 'react-router-dom';
import CreateUser from "./pages/CreateUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
	return (
		<Router>
				<NavBar/>
				<Wrapper>
				<Router>
					<Switch>
						<Route exact path="/" component={Login} />	
						<Route exact path="/login" component={Login} />
					</Switch>
					<Route exact path="/home" component={Home} />
					<Route exact path="/createuser" component={CreateUser} />
					<Route exact path="/about" component={About} />
				</Router>
					{/* <Route exact path="/login" component={Login} /> */}
				</Wrapper>
				<Footer />
		</Router>
	
	);
}

export default App;
