import React from "react";
import { kelvinToCelsius } from "../../utils/weather";
import "./tempTitle.scss";
export const TempTitle = ({ temp }) => {
  return <p className="temp-title">{kelvinToCelsius(temp)}° C</p>;
};
