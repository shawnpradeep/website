import React, { useState, useEffect } from "react";
import Social from "./components/Social/Social";
import Clock from "./components/Clock/Clock";
import Header from "./components/Header/Header";
import Switch from "./components/Switch/Switch";
import SnowAnimation from "./components/Snow/Snow";

function App() {
  const LIGHT = "#E8E8E8";
  const DARK = "#171512";

  const [hour, setHours] = useState(new Date().getHours());
  const [isDark, toggleDark] = useState(hour > 17 || hour < 7);

  useEffect(() => {
    setInterval(() => setHours(new Date().getHours()), 1000);
    // toggleDark(hour > 17 || hour < 7);
    if (isDark) {
      document.getElementById("switch").checked = true;
    } else {
      document.getElementById("switch").checked = false;
    }
  });

  document.body.style.backgroundColor = isDark ? DARK : LIGHT;

  const toggleTheme = () => {
    if (isDark) {
      document.getElementById("main").className = "container-light";
      document.body.style.backgroundColor = LIGHT;
      toggleDark(false);
    } else {
      document.getElementById("main").className = "container-dark";
      document.body.style.backgroundColor = DARK;
      toggleDark(true);
    }

    if (isDark) {
      document.getElementById("switch").checked = true;
    } else {
      document.getElementById("switch").checked = false;
    }
  };

  return (
    <div className="container">
      <SnowAnimation isDark={isDark} />
      <div className={isDark ? "container-dark" : "container-light"} id="main">
        <Header />
        <Clock isDark={isDark} />
        <Social isDark={isDark} />
      </div>
      <div className="theme-button">
        <Switch toggleTheme={toggleTheme} isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
