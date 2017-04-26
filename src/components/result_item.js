import React from "react";

const ResultItem = ({weather}) => {
	return (
		<li>max : {weather.temp.max}, min: {weather.temp.min}, day: {weather.temp.day}</li>
	);
};

export default ResultItem;