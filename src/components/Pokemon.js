import React from "react";
import _startCase from "lodash/startCase";

const defaultImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/premier-ball.png";

const Pokemon = ({ img, name }) => (
  <div className="m-2 flex flex-col items-center rounded-lg w-32 h-40 bg-yellow-300">
    <div className="h-5/6">
      <img src={img ? img : defaultImg} />
    </div>
    <div className="h-1/6">
      <b>{_startCase(name)}</b>
    </div>
  </div>
);

export default Pokemon;
