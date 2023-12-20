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
  if (true) toggleTheme();
  date = date.toLocaleDateString();

  formatted_date.innerText = day + " " + date;
  formatted_time.innerText = time + " " + zone;
  setTimeout(updateDateTime, 1000);
}

function toggleTheme() {
  if (darkMode) {
    document.body.style.backgroundColor = "#171512";
    document.body.style.color = "white";
  }
}

function handleKeyPress(event) {
  if (event.key === "D" || event.key === "d") {
    toggleTheme();
  }
}

document.addEventListener("keydown", handleKeyPress);

updateDateTime();
