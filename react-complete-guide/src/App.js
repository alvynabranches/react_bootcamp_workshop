import React, { Component } from 'react';
// eslint-disable-next-line
import Person from './Person/Person.js';
import { Project } from './Portfolio/Portfolio.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 className="App-title">Welcome to React</h1>
				<p>This is my first project.</p>
				<Person />
				<Person />
				<Person />
				<Person />
				<Person />
				<div className="all-projects">
					<Project title="Machine Learning with Job Data" desc="Web-scrapping indeed.com data, I have found the best possible jobs in a locality. " details="Programming Language -> Python. Front-End -> Dash. ML/DL -> Classification and Regression Problem Statement."/>
					<Project title="Machine Learning with Audio Data" desc="Generating new folk music using LSTMs." details="Programming Language -> Python. Front-End -> Django. Back-End -> Django. ML/DL -> LSTM, Auto Encoder, GANs"/>
				</div>
			</div>
		);
	}
}

export default App;
