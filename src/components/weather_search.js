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
				type="text" 
				className="form-control" 
				onBlur={
					e => {
						const value = e.target.value;
						// console.log(value);
						this.setState({city: value});
					}
				}
				/>

				<button className="btn btn-success" onClick={e => this.props.searchweather(this.state.city)}>Search</button>
			</div>
		);
	}
};

export default WeatherSearch;