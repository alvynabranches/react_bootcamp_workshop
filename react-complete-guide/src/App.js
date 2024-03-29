import React, { Component } from 'react';
// eslint-disable-next-line
import { useState } from 'react';
// eslint-disable-next-line
import Person from './Person/Person.js';
import { Project } from './Portfolio/Portfolio.js';
import './App.css';

class App extends Component {
	state = {
		persons: [
			{name: 'Alvyn', age: 24},
			{name: 'Max', age: 28},
		]
	}
	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{name: newName, age: 24},
				{name: 'Maximilian', age: 28},
			]
		});
	}
	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{name: 'Alvyn Abranches', age: 24},
				{name: event.target.value, age: 28},
			]
		});
	}

	render() {
		const style = {
			backgroundColor: 'white', 
			font: 'inherit', 
			border: '1px solid blue', 
			padding: '8px', 
			cursor: 'pointer', 
		};
		
		return (
			<div className="App">
				<h1 className="App-title">Welcome to React</h1>
				<p>This is my first project</p>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler}/>
 				<Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}/>
 				<Person name="Joy"/>
 				<Person age="20"/>
 				<Person />
 				<button style={style} onClick={this.switchNameHandler.bind(this, 'Alvyn Abranches')}>Switch Name</button>
				<div className="all-projects">
					<Project title="Canteen Management System" desc="This project was a final year BSc (CS) project." details="Programming Language / Scripting Language / Markup Language / Styling Language -> PHP, HTML, CSS, JS. Frameworks -> jQuery, AJAX." />
					<Project title="Machine Learning with Job Data" desc="Web-scrapping indeed.com data, I have found the best possible jobs in a locality. " details="Programming Language -> Python. Front-End -> Dash. ML/DL -> Classification and Regression Problem Statement."/>
					<Project title="Music Generation using LSTMs, AEs and GANs" desc="Generating new folk music using LSTMs." details="Programming Language -> Python. Front-End -> Django. Back-End -> Django. ML/DL -> LSTM, Auto Encoder, GANs"/>
				</div>
			</div>
		)
	}
}

// Class Based State
// class App extends Component {
// 	state = {
// 		persons: [
// 			{name: 'Alvyn', age: 24},
// 			{name: 'Max', age: 28},
// 		]
// 	}

// 	switchNameHandler = (newName) => {
// 		// console.log('Was Clicked!');
// 		// DONT DO THIS: this.state.persons[0].name = 'Alvyn Abranches';
// 		this.setState({
// 			persons: [
// 				{name: newName, age: 24},
// 				{name: 'Maximilian', age: 28},
// 			]
// 		});
// 	}

// 	render() {
// 		return (
// 			<div className="App">
// 				<h1 className="App-title">Welcome to React</h1>
// 				<p>This is my first project.</p>
// 				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
// 				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
// 				<Person name="Joy"/>
// 				<Person age="20"/>
// 				<Person />
// 				<button onClick={this.switchNameHandler}>Switch Name</button>
// 				<button onClick={() => this.switchNameHandler()}>Switch Name</button> // alternative syntax to the above line -> NOT PREFERED
// 				<button onClick={this.switchNameHandler.bind(this, 'Alvyn Abranches')}></button>
// 				<div className="all-projects">
// 					<Project title="Machine Learning with Job Data" desc="Web-scrapping indeed.com data, I have found the best possible jobs in a locality. " details="Programming Language -> Python. Front-End -> Dash. ML/DL -> Classification and Regression Problem Statement."/>
// 					<Project title="Machine Learning with Audio Data" desc="Generating new folk music using LSTMs." details="Programming Language -> Python. Front-End -> Django. Back-End -> Django. ML/DL -> LSTM, Auto Encoder, GANs"/>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// Function Based State
// const app = () => {
// 	const [ personsState, setPersonsState] = useState({
// 		persons: [
// 			{name: 'Alvyn', age: 24},
// 			{name: 'Max', age: 28},
// 		]
// 	});

// 	const switchNameHandler = () => {
// 		// console.log('Was Clicked!');
// 		// DONT DO THIS: this.state.persons[0].name = 'Alvyn Abranches';
// 		setPersonsState({
// 			persons: [
// 				{name: 'Alvyn Abranches', age: 24},
// 				{name: 'Maximilian', age: 28},
// 			]
// 		});
// 	}

// 	return (
// 		<div className="App">
// 			<h1 className="App-title">Welcome to React</h1>
// 			<p>This is my first project.</p>
// 			<Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
// 			<Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
// 			<Person name="Joy"/>
// 			<Person age="20"/>
// 			<Person />
// 			<button onClick={switchNameHandler}>Switch Name</button>
// 			<div className="all-projects">
// 				<Project title="Machine Learning with Job Data" desc="Web-scrapping indeed.com data, I have found the best possible jobs in a locality. " details="Programming Language -> Python. Front-End -> Dash. ML/DL -> Classification and Regression Problem Statement."/>
// 				<Project title="Machine Learning with Audio Data" desc="Generating new folk music using LSTMs." details="Programming Language -> Python. Front-End -> Django. Back-End -> Django. ML/DL -> LSTM, Auto Encoder, GANs"/>
// 			</div>
// 		</div>
// 	);
// }

export default App;
