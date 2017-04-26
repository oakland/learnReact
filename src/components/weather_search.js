import React, {Component} from "react";

class WeatherSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "initial value"
		}
	}
	render() {
		return (
			<div>
				<input type="text" placeholder={this.state.value} /><button>Search</button>
			</div>
		);
	}
};

export default WeatherSearch;