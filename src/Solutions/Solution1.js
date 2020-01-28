import React, { useState } from "react";

function TacoCounter() {
  const [count, setCount] = useState(0);

  const handleAddClick = () => {
    setCount(count + 1);
  };

  const handleSubctractClick = () => {
    setCount(count !== 0 ? count - 1 : 0);
  };

  return (
    <div>
      You want {count} taco(s)
      <div>
        <button className="mr-2" onClick={handleAddClick}>
          Add
        </button>
        <button onClick={handleSubctractClick}>Subtract</button>
      </div>
    </div>
  );
}

export default TacoCounter;
