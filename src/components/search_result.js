import React from "react";
import ResultItem from "./result_item";

const SearchResult = ({weathers}) => {
	if(!weathers) {
		return <div>Loading...</div>;
	};
	const items = weathers.list.map(weather => {
		return (
			<ResultItem key={weather.dt} weather={weather} />
		)
	});
	return (
		<ul className="list-group">
			{items}
		</ul>
	);
};

export default SearchResult;