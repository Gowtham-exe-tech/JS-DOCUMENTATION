const output = document.querySelector("#output");

const settings = {
  theme: "dark",
  notifications: { email: true, push: false },
  dashboard: { widgets: ["sales", "orders"] }
};

let storedJSON = "";

document.querySelector("#saveBtn").addEventListener("click", () => {
  storedJSON = JSON.stringify(settings);
  output.textContent = `JSON string sent to storage/API:\n${storedJSON}`;
});

document.querySelector("#loadBtn").addEventListener("click", () => {
  if (!storedJSON) {
    output.textContent = "Save the settings first.";
    return;
  }

  const parsedSettings = JSON.parse(storedJSON);
  output.textContent = `Parsed object:\n${JSON.stringify(parsedSettings, null, 2)}`;
});

document.querySelector("#copyBtn").addEventListener("click", () => {
  // JSON round-trip creates a deep copy for JSON-safe data.
  const deepCopy = JSON.parse(JSON.stringify(settings));
  deepCopy.notifications.email = false;

  output.textContent = `Original email setting: ${settings.notifications.email}
Deep copy email setting: ${deepCopy.notifications.email}

This demonstrates why changing the nested object in the deep copy
does not change the original.`;
});

// Shallow copy reminder:
// const shallowCopy = { ...settings };
// shallowCopy.notifications.email = false;
// That nested object is still shared with settings.
