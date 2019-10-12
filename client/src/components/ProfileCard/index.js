import React, { Component } from "react";
import { Card, CardTitle, CardBody, Table } from "reactstrap";
import { FormBtn} from "../Form";
import "./style.css";

class ProfileCard extends Component {

	state = {

	};
	// state changing is the "toDo" input


	//   componentDidMount() {
	// 	this.loadBooks();
	//   }

	//   loadBooks = () => {
	// 	API.getBooks()
	// 	  .then(res => this.setState({ books: res.data }))
	// 	  .catch(err => console.log(err));
	//   };
	render() {
		return (
			<Card id="profileCard">
				<CardTitle>
					<h4> This will be the card that holds List of profiles </h4>
				</CardTitle>
				<CardBody>

					This is the body of the card
					(it appears like we loose 3 columns if the cards are not big enough to justify 3 rows)
					<Table hover responsive="sm">
						<thead>
							<tr>
								<th>#</th>
								<th>Here's everyone on the project!</th>

							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>John</td>

							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Rod</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Sean</td>
							</tr>
						</tbody>
					</Table>
					<FormBtn 
						disabled={!(this.state.toDo)}
						onClick={this.handleFormSubmit}
						> Click me to display all profiles in the projects</FormBtn>
				</CardBody>
			</Card>
		);
	}
}

export default ProfileCard;