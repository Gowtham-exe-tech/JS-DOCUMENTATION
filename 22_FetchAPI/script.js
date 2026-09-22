const output = document.querySelector("#output");
const API_URL = "https://jsonplaceholder.typicode.com/users/1";

document.querySelector("#fetchBtn").addEventListener("click", async () => {
  output.textContent = "Loading...";

  try {
    const response = await fetch(API_URL, {
      headers: { "Accept": "application/json" }
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const user = await response.json();

    output.textContent = `Fetch API result:
Name: ${user.name}
Email: ${user.email}
Company: ${user.company.name}`;
  } catch (error) {
    output.textContent = `Request failed: ${error.message}`;
  }
});

document.querySelector("#xhrBtn").addEventListener("click", () => {
  output.textContent = "Loading with XMLHttpRequest...";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const user = JSON.parse(xhr.responseText);

      output.textContent = `XMLHttpRequest result:
Name: ${user.name}
Email: ${user.email}`;
    } else {
      output.textContent = `Request failed: HTTP ${xhr.status}`;
    }
  };

  xhr.onerror = () => {
    output.textContent = "Network error.";
  };

  xhr.send();
});
