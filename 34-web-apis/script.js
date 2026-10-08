const card = document.querySelector("#locCard");
const locList = document.querySelector("#locList");
const canvas = document.querySelector("#chart");
const ctx = canvas.getContext("2d");
const noteBox = document.querySelector("#noteBox");
const visitBox = document.querySelector("#visits");

// Web Storage - localStorage stays after refresh, sessionStorage clears when tab closes
const visits = Number(localStorage.getItem("visits") || 0) + 1;
localStorage.setItem("visits", visits);

sessionStorage.setItem("tabOpened", new Date().toLocaleTimeString());
visitBox.textContent = `Total visits: ${visits}, this tab opened at ${sessionStorage.getItem("tabOpened")}`;

noteBox.value = localStorage.getItem("note") || "";
noteBox.addEventListener("input", () =>
  localStorage.setItem("note", noteBox.value),
); // auto save

// Canvas - line chart
function drawChart(values) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  values.forEach((v, i) => {
    const x = i * 60 + 20,
      y = canvas.height - v * 4;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });

  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.stroke();
}

function randomValues() {
  return Array.from({ length: 5 }, () => 10 + Math.floor(Math.random() * 25));
}

drawChart(randomValues());
document.querySelector("#drawBtn").addEventListener("click", () => drawChart(randomValues()));

// Geolocation - needs user permission and https or localhost
document.querySelector("#locBtn").addEventListener("click", () => {
  card.textContent = "Finding...";
  
  navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      card.textContent = `Lat: ${latitude.toFixed(3)}, Lon: ${longitude.toFixed(3)}`;
      const li = document.createElement("li"); // DOM - create and add element
      li.textContent =
        new Date().toLocaleTimeString() + " -> " + card.textContent;
      locList.appendChild(li);
    },
    (err) => {
      card.textContent = "Location denied: " + err.message;
    },
  );
});

// Notification API - ask permission first
document.querySelector("#notifyBtn").addEventListener("click", async () => {

  if (Notification.permission !== "granted")
    await Notification.requestPermission();

  if (Notification.permission === "granted")
    new Notification("Dashboard", { 
            body: "Hello from Web Notification API" 
  });

  else alert("Notification permission not given");
});
