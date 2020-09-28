import React from "react";
import { Vdata } from "./Vdata";
import Card from "./Card";

export const Cardlist = () => {
  return Vdata.map(card => (
    <Card key={card.id} title={card.title} src={card.src} link={card.text} />
  ));
};
