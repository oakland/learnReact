// 可以记录一下 400 错误，就是 bad request 错误。写一篇博客或者 issue
// 写一些解决 bind(this) 的方法，写一个 issue。
// 服务器有问题的时候如何实现给用户的友好提示？有时候调用 openweatherapis 的时候，服务器会提示 503
// 如何实现用类似 echart 这样的框架和 react 的融合？让天气预报以图表的形式进行展示

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
		this.weathersearch = this.weathersearch.bind(this);
		this.weathersearch("beijing");
	}
	weathersearch(city) {
		OpenWeather.setLang('zh');
		OpenWeather.setCity(city);
		OpenWeather.setUnits('metric');
		OpenWeather.setAPPID(APPID);
		OpenWeather.getWeatherForecastForDays(3, (err, weathers) => {
	        // console.log(_this);
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