import React, {Component} from "react";

class WeatherSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: ""
		};
	}
	render() {
		return (
			<div className="form-inline">
				<input 
				className="form-control" 
				onBlur={e => {
					const value = e.target.value;
					this.setState({city: value});
				}}
				/>
				<button className="btn btn-success" onClick={e => this.props.weathersearch(this.state.city)}>Search</button>
			</div>
		);
	}
};

export default WeatherSearch;