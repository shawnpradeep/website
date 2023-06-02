import React from "react";
import "./Switch.css";

function Switch({ toggleTheme }) {
  return (
    <div>
      <input type="checkbox" id="switch" onClick={toggleTheme} />
      <label for="switch"></label>
    </div>
  );
}

export default Switch;
