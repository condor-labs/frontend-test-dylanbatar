import React from "react";
import "./cityTitle.scss";

export const CityTitle = ({ city, icon, background }) => {
  return (
    <span className={`${background && "purple-background"} widget-headquarter`}>
      {icon && <i className="fas fa-map-marker-alt"></i>}
      <span>{city}</span>
    </span>
  );
};
