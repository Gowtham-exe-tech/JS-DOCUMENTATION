// get a free key from openweathermap.org. NOTE: a key in frontend code is visible to everyone, so for a real product I would call my own backend and keep the key there
const apiKey = "97d07f3df8c718617257f6c343498f2d";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const themeStorageKey = "weatherTheme";
const searchForm = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const locationButton = document.getElementById("locationButton");
const messageBox = document.getElementById("messageBox");
const weatherCard = document.getElementById("weatherCard");
const statusBadge = document.getElementById("statusBadge");
const themeToggle = document.getElementById("themeToggle");

// simple emoji icons chosen by the "main" field of the api, an object lookup is cleaner than a long if-else chain and easy to extend
const weatherIcons = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Drizzle: "🌦️",
  Thunderstorm: "⛈️",
  Snow: "❄️",
  Mist: "🌫️",
  Fog: "🌫️",
  Haze: "🌫️",
  Smoke: "🌫️",
};

function showMessage(text, type) {
  messageBox.textContent = text;
  messageBox.className = type === "error" ? "messageBox error" : "messageBox";
}

function hideMessage() {
  messageBox.className = "messageBox hidden";
}

// disabling the buttons while loading stops the user from spamming requests (and using up the free api limit)
function setLoading(isLoading) {
  searchButton.disabled = isLoading;
  locationButton.disabled = isLoading;
  searchButton.textContent = isLoading ? "..." : "Search";
}

// ---------- input validation ----------
function validateCity(rawValue) {
  // trim removes spaces at start/end, and the replace turns many spaces in the middle into one ("new    york" -> "new york")
  const city = rawValue.trim().replace(/\s+/g, " ");
  if (city === "")
    return { valid: false, message: "Please enter a city name." };
  // \p{L} means any letter of any language (so names like "Zürich" or "சென்னை" are fine), digits are not letters so they get rejected. I also allow space . ' - for names like "St. John's"
  if (!/^[\p{L}\s.'-]+$/u.test(city))
    return {
      valid: false,
      message: "City name can contain only letters, not numbers or symbols.",
    };
  return { valid: true, city: city };
}

// ---------- fetching ----------
async function fetchWeather(url) {
  // checked before fetch so the user gets an instant clear message instead of waiting for a timeout
  if (!navigator.onLine) {
    showMessage(
      "You are offline. Please check your internet connection.",
      "error",
    );
    return;
  }
  setLoading(true);
  hideMessage();
  try {
    const response = await fetch(url);
    // fetch does NOT throw for 404 or 401, it only throws on network failure, so I must check response.ok myself
    if (!response.ok) {
      if (response.status === 404)
        showMessage(
          "City not found. Check the spelling and try again.",
          "error",
        );
      else if (response.status === 401)
        showMessage(
          "Invalid API key. New keys can take a few hours to activate.",
          "error",
        );
      else if (response.status === 429)
        showMessage("Too many requests. Please wait a minute.", "error");
      else
        showMessage("Something went wrong. Please try again later.", "error");
      return;
    }
    const data = await response.json();
    showWeather(data);
  } catch (error) {
    // reaching here means the request never got a response (wifi dropped, dns failed, etc.)
    showMessage(
      "Network problem. Could not reach the weather server.",
      "error",
    );
  } finally {
    // finally runs for success, error and the early return above, so the buttons never stay locked
    setLoading(false);
  }
}

function showWeather(data) {
  // textContent instead of innerHTML because the data comes from outside, innerHTML could run injected html (XSS)
  document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
  document.getElementById("description").textContent = data.weather[0].description;
  document.getElementById("feelsLike").textContent = `${Math.round(data.main.feels_like)}°C`;
  document.getElementById("humidity").textContent = `${data.main.humidity}%`;
  document.getElementById("windSpeed").textContent = `${data.wind.speed} m/s`;
  // fallback thermometer so an unknown weather type never shows an empty icon
  document.getElementById("weatherIcon").textContent = weatherIcons[data.weather[0].main] || "🌡️";
  weatherCard.classList.remove("hidden");
}
searchForm.addEventListener("submit", function (event) {
  // stop the browser from reloading the page, which is the default form behavior
  event.preventDefault();
  const result = validateCity(cityInput.value);
  if (!result.valid) {
    showMessage(result.message, "error");
    return;
  }
  // show the cleaned value back in the input so the user sees what was searched
  cityInput.value = result.city;
  // encodeURIComponent makes special characters safe inside the url (a space becomes %20)
  fetchWeather(
    `${baseUrl}?q=${encodeURIComponent(result.city)}&units=metric&appid=${apiKey}`,
  );
});

// ---------- current location ----------
locationButton.addEventListener("click", function () {
  if (!("geolocation" in navigator)) {
    showMessage("Your browser does not support location.", "error");
    return;
  }
  showMessage("Getting your location...", "info");
  // timeout added so the app does not wait forever if the gps is slow
  navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError, {
    timeout: 10000,
  });
});

function onLocationSuccess(position) {
  const { latitude, longitude } = position.coords;
  // asking by coordinates is more accurate than city name, because names can be duplicated in different countries
  fetchWeather(
    `${baseUrl}?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`,
  );
}

function onLocationError(error) {
  // error codes: 1 = user blocked, 2 = position not available, 3 = timeout. friendly message for each
  if (error.code === 1)
    showMessage(
      "Location permission denied. Allow it in the browser or search by city.",
      "error",
    );
  else if (error.code === 3)
    showMessage("Location request timed out. Please try again.", "error");
  else showMessage("Could not find your location.", "error");
}

// ---------- online / offline ----------
function updateOnlineStatus() {
  const isOnline = navigator.onLine;
  statusBadge.textContent = isOnline ? "● Online" : "● Offline";
  statusBadge.className = isOnline
    ? "statusBadge online"
    : "statusBadge offline";
  if (!isOnline)
    showMessage("You are offline. Weather cannot be loaded.", "error");
  else hideMessage();
}
// the browser fires these two events when the connection changes. navigator.onLine only knows about the network connection, not the real internet, so the catch block in fetchWeather is still needed
window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

// ---------- theme ----------
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}


themeToggle.addEventListener("click", function () {
  const newTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem(themeStorageKey, newTheme);
});

applyTheme(localStorage.getItem(themeStorageKey) || "light");

// run once on load, because the user may open the page while already offline and no event will fire
updateOnlineStatus();
