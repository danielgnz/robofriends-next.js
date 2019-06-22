import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import Title from '../components/Title';
import PageStyle from '../components/PageStyle';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			robots: [],
			searchField: '',
		}
	}

	componentDidMount = () => this.getRobots();

	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});
		return (
			<div style={{textAlign: 'center'}}>
				<Title desc="Robofriends" />
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
				<PageStyle />
			</div>
		);
	}

	getRobots = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
	 		.then(res => res.json())
	 		.then(data => this.setState({ robots: data }))
	 		.catch(err => console.log('ooops: error'))
	}

	onSearchChange = (event) => this.setState({ searchField: event.target.value });
}

export default Index;

// Helpers
