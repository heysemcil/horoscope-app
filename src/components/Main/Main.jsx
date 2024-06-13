import React from "react";
import Card from "./Card";
import {data} from "../../helper/data"
import './Main.scss'

const Main = () => {
  return (
    <div>
      <Card card = {data} />
    </div>
  );
};

export default Main;
