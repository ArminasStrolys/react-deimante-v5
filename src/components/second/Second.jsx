import React, { useState } from "react";
import "./second.css";
import ExtraComp from "./ExtraComp";

const Second = () => {
  const [addCube, setAddCube] = useState([]);

  return (
    <main className="mainBase">
      <div className="mainDiv">
        <button onClick={() => setAddCube((val) => [...val, <ExtraComp />])}>
          ADD
        </button>
      </div>
      <div>{addCube}</div>
    </main>
  );
};

export default Second;
