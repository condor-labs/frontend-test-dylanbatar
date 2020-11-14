import React from "react";
import { ContainerCard } from "../../Cards/ContainerCard/ContainerCard";

export const Slide = ({ slideItems = [] }) => {
  return (
    <ContainerCard>
      <div id="widget-carousel"></div>
    </ContainerCard>
  );
};
