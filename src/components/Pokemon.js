import React from "react";
import _startCase from "lodash/startCase";
import Loader from "./Loader";

const defaultImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/premier-ball.png";

const Pokemon = ({ img, name, value }) => (
  <div className="m-2 flex flex-col items-center rounded-lg w-32 h-40 bg-yellow-300">
    {value === "loading" ? (
      <Loader />
    ) : (
      <div className="flex flex-col items-center">
        <div className="h-5/6">
          <img src={img ? img : defaultImg} alt={name} />
        </div>
        <div className="h-1/6">
          <b>{_startCase(name)}</b>
        </div>
      </div>
    )}
  </div>
);

export default Pokemon;
