import React, { useState } from "react";
import "./Calculator.sass";
import { Runtime } from "./Runtime.jsx";
import { Constructor } from "./Constructor.jsx";

export const Calculator = () => {
  const [viewRuntime, setViewRuntime] = useState(false);
  function setView(btn) {
    btn === "runtime" ? setViewRuntime(true) : setViewRuntime(false);
  }
  return (
    <div className="wrapper">
      <h1 className="title">calculator component!</h1>
      <div className="swapView-wrapper">
        <button onClick={() => setView("runtime")}>Runtime</button>
        <button onClick={() => setView("constructor")}>Constructor</button>
      </div>
      {viewRuntime ? <Runtime /> : <Constructor />}
    </div>
  );
};
