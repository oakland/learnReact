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
			<div className="form-inline">
				<input type="text" placeholder={this.state.value} className="form-control" />
				<button className="btn btn-success">Search</button>
			</div>
		);
	}
};

export default WeatherSearch;