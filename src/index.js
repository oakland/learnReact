import React, {Component} from "react";
import ReactDom from "react-dom";
import WeatherSearch from "./components/weather_search";
import SearchResult from "./components/search_result";
import Weather from "openweather-apis";
import _ from "lodash";
const APPID = "5e291601749826c80cf9a382c7de31e3";

// json path: .list["0"].temp.max, .day

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			weathers: []
		};
		this.weathersearch("beijing");
	}
	weathersearch(city) {
		Weather.setLang('zh');
		Weather.setCity(city);
		Weather.setUnits('metric');
		Weather.setAPPID(APPID);
		Weather.getWeatherForecastForDays(3, (err, obj) => {
	        // console.log(this);
	        this.setState({weathers: obj});
	        // __scope__.Global[1].$r.setState({weathers: obj});
	        // console.log(obj);
	    });
	}
	render() {
		const weathersearch = _.debounce((city) => {this.weathersearch(city)}, 500);
		return (
			<div>
				<WeatherSearch searchweather={weathersearch}/>
				<SearchResult weathers={this.state.weathers.list} />
			</div>
		);
	}
};

ReactDom.render(<App />, document.querySelector(".container"));