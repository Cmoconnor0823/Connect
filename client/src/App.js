import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
	useLocation
  } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
	return (
		<Router>
			<NavBar/>
			<Wrapper>
				<Switch>
					<Route exact path="/" component={Login} />	
					<Route exact path="/login" component={Login} />
					<PrivateRoute exact path="/home" component={Home}/>
					<Route exact path="/createuser" component={CreateUser} />
					<Route exact path="/about" component={About} />
				</Switch>
				{/* <Route exact path="/login" component={Login} /> */}
			</Wrapper>
			<Footer />
		</Router>
	);
}
function checkAuth() {
// let authStored = localStorage.getItem('loggedin');
// console.log(authStored)
	if (sessionStorage.loggedin === "success"){
		return true;
	}
	else{
		return;
	}
}
function PrivateRoute ({component: Component, authed, ...rest}) {
	return (
	  <Route
		{...rest}
		render={(props) => checkAuth() === true
		  ? <Component {...props} />
		  : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
	  />
	)
  }

export default App;
