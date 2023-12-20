let darkMode = false;
const formatted_date = document.getElementById("date");
const formatted_time = document.getElementById("time");

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateDateTime() {
  let date = new Date();
  let day = dayNames[date.getDay()];
  let zone = date
    .toLocaleTimeString("en-us", { timeZoneName: "short" })
    .split(" ")[2];

  let time = date.toLocaleTimeString();
  date = date.toLocaleDateString();

  formatted_date.innerText = day + " " + date;
  formatted_time.innerText = time + " " + zone;
  setTimeout(updateDateTime, 1000);
}

updateDateTime();
