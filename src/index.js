import React, {Component} from "react";
import ReactDom from "react-dom";
import WeatherSearch from "./components/weather_search";
import SearchResult from "./components/search_result";
import OpenWeather from "openweather-apis";
const APPID = "5e291601749826c80cf9a382c7de31e3";

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			weathers: []
		};
		this.weathersearch("beijing");
	}
	weathersearch(city) {
		OpenWeather.setLang('zh');
		OpenWeather.setCity(city);
		OpenWeather.setUnits('metric');
		OpenWeather.setAPPID(APPID);
		OpenWeather.getWeatherForecastForDays(3, (err, weathers) => {
	        // console.log(this);
	        this.setState({weathers});
	    });
	}
	render() {
		return (
			<div>
				<WeatherSearch weathersearch={this.weathersearch}/>
				<SearchResult weathers={this.state.weathers.list} />
			</div>
		);
	}
};

ReactDom.render(<App />, document.querySelector(".container"));