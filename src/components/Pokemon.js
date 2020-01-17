import React from "react";

const Pokemon = ({ img, name }) => (
  <div>
    <img src={img} />
    <b>{name}</b>
  </div>
);

export default Pokemon;
