import React, { useState, useEffect } from "react";

const Third = () => {
  const [counter, setCounter] = useState(
    localStorage.getItem("number") !== null ? JSON.parse(localStorage.getItem("number")
  ):null)

  useEffect(() => {
    localStorage.setItem("number", JSON.stringify(counter));
  }, [counter]);

  const clear = () => {
    localStorage.removeItem("number");
   setCounter(0)
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
        backgroundColor: "limegreen",
        height: "200px",
      }}
    >
      <button
        style={{ marginTop: "20px" }}
        onClick={() => setCounter(counter + 1)}
      >
        FOREVER IN MY MEMORY
      </button>

      <div style={{ fontSize: "50px", marginTop: "30px" }}>
        {" "}
        <div
          style={{
            margin: "auto",
            borderRadius: "100%",
            border: "5px solid white",
            width: "80px",
            height: "80px",
          }}
        >
          {counter}
          <br />
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Third;
