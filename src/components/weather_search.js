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

	onInputChange(term) {
		this.setState({term});
		this.props.searchweather(term);
	}
};

export default WeatherSearch;
// <button className="btn btn-success" onClick={e => this.props.searchweather(this.state.city)}>Search</button>