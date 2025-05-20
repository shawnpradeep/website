let isDark = false;
let darkOverride = false;

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
  let hours = date.getHours();
  let day = dayNames[date.getDay()];
  let zone = date
    .toLocaleTimeString("en-us", { timeZoneName: "short" })
    .split(" ")[2];

  let time = date.toLocaleTimeString();
  if (true) toggleTheme();
  date = date.toLocaleDateString();

  formatted_date.innerText = day + " " + date;
  formatted_time.innerText = time + " " + zone;
  if (!darkOverride) {
    // dark mode on from 6pm to 6am
    if (hours > 17 || hours < 7) {
      isDark = true;
      toggleTheme();
    } else {
      isDark = false;
      toggleTheme();
    }
  }

  setTimeout(updateDateTime, 1000);
}

function toggleTheme() {
  if (isDark) {
    document.body.style.backgroundColor = "#101011";
    document.body.style.color = "white";
    document.getElementById("github").src = "public/icons/github_dark.svg";
    document.getElementById("instagram").src =
      "public/icons/instagram_dark.svg";
    document.getElementById("linkedin").src = "public/icons/linkedin_dark.svg";
    document.getElementById("spotify").src = "public/icons/spotify_dark.svg";
    document.getElementById("email").src = "public/icons/email_dark.svg";
  } else {
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = "black";
    document.getElementById("github").src = "public/icons/github_light.svg";
    document.getElementById("instagram").src =
      "public/icons/instagram_light.svg";
    document.getElementById("linkedin").src = "public/icons/linkedin_light.svg";
    document.getElementById("spotify").src = "public/icons/spotify_light.svg";
    document.getElementById("email").src = "public/icons/email_light.svg";
  }
}

function handleKeyPress(event) {
  if (event.key === "D" || event.key === "d") {
    isDark = !isDark;
    darkOverride = true;
    toggleTheme();
  }
}

document.addEventListener("keydown", handleKeyPress);

updateDateTime();
