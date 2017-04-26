import React, {Component} from "react";
import ReactDom from "react-dom";
import WeatherSearch from "./components/weather_search";
import SearchResult from "./components/search_result";
import Weather from "openweather-apis";
const APPID = "5e291601749826c80cf9a382c7de31e3";

// json path: .list["0"].temp.max, .day

class App extends Component{
	constructor(props) {
		super(props);
		// const weathers = this.weathersearch();
		this.state = {
			weathers: null
		};
		this.weathersearch();
	}
	weathersearch() {
		Weather.setLang('zh');
		Weather.setCity('Beijing');
		Weather.setUnits('metric');
		Weather.setAPPID(APPID);
		Weather.getWeatherForecastForDays(3, (err, obj) => {
	        this.setState({weathers: obj.list});
	        console.log(obj);
	    });
	}
	render() {
		return (
			<div>
				<WeatherSearch />
				<SearchResult weathers={this.state.weathers} />
			</div>
		);
	}
};

ReactDom.render(<App />, document.querySelector(".container"));