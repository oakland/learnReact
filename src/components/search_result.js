import React from "react";
import ResultItem from "./result_item";

const SearchResult = ({weathers}) => {
	if(!weathers) {
		return <div>Loading...</div>;
	};
	const items = weathers.map(weather => {
		return (
			<ResultItem 
			key={weather.dt} 
			weather={weather} 
			// min={weather.temp.min}
			// day={weather.temp.day}
			>
			</ResultItem>
		)
	});
	return (
		<ul>
			{items}
		</ul>
	);
};

export default SearchResult;