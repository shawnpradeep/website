import React, {useState, useEffect} from "react";
import Social from "./components/Social/Social";
import Clock from "./components/Clock/Clock";

function App() {
  const [hour, setHours] = useState(new Date().getHours());
  
  useEffect(() => {
    setInterval(() => setHours(new Date().getHours()), 1000);
  })
  
  const [isDark] = useState(hour > 19 || hour < 7);

  document.body.style.backgroundColor = isDark ? '#171512' : '#E8E8E8';

  return (
    <div className={isDark ? "container-dark" : "container-light"}>
      <p className="title">&gt;&nbsp;SHAWNPRADEEP</p>
      <Clock isDark={isDark}/>
      <Social isDark={isDark}/>
    </div>
  );
}

export default App;
