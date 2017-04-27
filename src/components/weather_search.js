import React, {Component} from "react";

class WeatherSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: ""
		}
	}
	render() {
		return (
			<div className="form-inline">
				<input 
				className="form-control" 
				onChange={e => this.onInputChange(e.target.value)}
				/>
			</div>
		);
	}

	onInputChange(city) {
		this.setState({city});
		this.props.weathersearch(city);
	}
};

export default WeatherSearch;