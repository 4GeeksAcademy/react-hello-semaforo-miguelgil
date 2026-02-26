import React, { useState } from "react";

function TrafficLight() {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    if (color === "red") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("green");
    } else {
      setColor("red");
    }
  };

  return (
    <div className="conyainer-traffic">
      <div className="traffic">
        <div
          className={`light red ${color === "red" ? "click" : ""}`}
          onClick={() => setColor("red")}
        ></div>

        <div
          className={`light yellow ${color === "yellow" ? "click" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>

        <div
          className={`light green ${color === "green" ? "click" : ""}`}
          onClick={() => setColor("green")}
        ></div>
      </div>

      <button className="button" onClick={changeColor}>
        cambiar color
      </button>
    </div>
  );
}

export default TrafficLight;
