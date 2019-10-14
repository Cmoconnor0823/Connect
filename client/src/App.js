import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link,
	// Redirect,
	// useHistory,
	// useLocation
  } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import Home from "./pages/Home";
//import About from "./pages/About";
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
					<Route exact path="/home" component={Home}/>
					<Route exact path="/createuser" component={CreateUser} />
				</Switch>
				{/* <Route exact path="/login" component={Login} /> */}
					{/* <Route exact path="/about" component={About} /> */}
			</Wrapper>
			<Footer />
		</Router>
	);
}
	 function checkAuth() {
	let authStored = localStorage.getItem('msg');
	if (authStored == "success"){
		return true;
	}
	else{
		return;
	}
}

//   function AuthButton() {
// 	let history = useHistory();
//   }

// function PrivateRoute({ children, ...rest }) {
// 	return (
// 	  <Route
// 		{...rest}
// 		render={({ location }) =>
// 		  checkAuth.isAuthenticated ? (
// 			children
// 		  ) : (
// 			<Redirect
// 			  to={{
// 				pathname: "/login",
// 				state: { from: location }
// 			  }}
// 			/>
// 		  )
// 		}
// 	  />
// 	);
//   }

export default App;
