import React from "react";
import { WeatherIcon } from "../../WeatherIcon/WeatherIcon";

export const ContainerCard = ({ children, icon, iconSize }) => {
  return (
    <div className="container-card">
      {icon && (
        <div className="leading-icon">
          <WeatherIcon icon={icon} size={iconSize} />
        </div>
      )}
      {children}
    </div>
  );
};
