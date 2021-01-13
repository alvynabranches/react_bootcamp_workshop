import React, { Component } from 'react';
// import {useState} from 'react';
// eslint-disable-next-line
import Person from './Person/Person.js';
import { Project } from './Portfolio/Portfolio.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 className="App-title">Welcome to React</h1>
				<p>This is my first project</p>
				<div className="all-projects">
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

// 	switchNameHandler = () => {
// 		// console.log('Was Clicked!');
// 		// DONT DO THIS: this.state.persons[0].name = 'Alvyn Abranches';
// 		this.setState({
// 			persons: [
// 				{name: 'Alvyn Abranches', age: 24},
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
