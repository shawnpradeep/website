import React, {useState, useEffect} from "react";
import "./Clock.css"

function Clock() {
  const dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const [time, setTime] = useState("loading...");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setDay(dayNames[date.getDay()]);
      setTime(date.toLocaleTimeString() + " EST");
      setDate(date.toLocaleDateString());
    }, 1000)
  }, [])

  return (
    <div className="timestamp-container">
      <p>{day + " " + date}</p>
      <p>{time}</p>
    </div>
  );
}

export default Clock;