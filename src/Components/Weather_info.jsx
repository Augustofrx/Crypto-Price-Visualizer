import React from "react";

export const WeatherInfo = ({ weatherData }) => {
  const { name, main } = weatherData;
  const { temp } = main ? main : "";

  return (
    <div className="container">
      <div className="d-flex flex-row-reverse mt-2 ">
        <p className="ms-4 me-0"><strong>{temp ? temp : ""} ºC</strong></p>
        <p><strong>{name ? name : ""}</strong></p>
      </div>
    </div>
  );
};
