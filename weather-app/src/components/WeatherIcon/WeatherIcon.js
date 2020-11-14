import React from "react";
import "weather-icons/css/weather-icons.css";

export const WeatherIcon = ({ icon, size = 70 }) => {
  return (
    <div className="widget-icon">
      <i className={`wi wi-day-${icon}`} style={{ fontSize: size + "px" }}></i>
    </div>
  );
};
