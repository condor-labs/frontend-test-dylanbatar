import React, { useEffect, useState } from "react";
import { forecastExtended } from "../../../api/forecasteExtended";
import { citiesPrognostic } from "../../../api/cities";
import { ContainerCard } from "../../Cards/ContainerCard/ContainerCard";
import { useFetch } from "../../../hooks/useFetch";

export const Slide = ({ slideItems = [] }) => {
  const [sliderData, setSlideItems] = useState(slideItems);
  const weatherDay = useFetch(citiesPrognostic);

  useEffect(() => {
    console.log(weatherDay);
  }, []);

  return (
    <ContainerCard>
      <div id="widget-carousel"></div>
    </ContainerCard>
  );
};
