const invoicePattern = /^INV-\d{4}-\d{4}$/;

document.querySelector("#validate").addEventListener("click", () => {
  const value = document.querySelector("#invoice").value.trim();
  const valid = invoicePattern.test(value);
  document.querySelector("#validation").textContent =
    valid ? "Valid invoice ID" : "Invalid invoice ID";
});

document.querySelector("#extract").addEventListener("click", () => {
  const text = document.querySelector("#text").value;

  // match() with g returns every matching invoice ID.
  const invoiceIds = text.match(/INV-\d{4}-\d{4}/g) || [];

  // Capture phone number and remove all non-digits.
  const phoneMatch = text.match(/\+?\d[\d -]{8,}\d/);
  const cleanedPhone = phoneMatch
    ? phoneMatch[0].replace(/\D/g, "")
    : "No phone found";

  // exec() gives match details.
  const detailPattern = /INV-(\d{4})-(\d{4})/;
  const firstMatch = detailPattern.exec(text);
  document.querySelector("#output").textContent =
`Invoice IDs:
${invoiceIds.join("\n")}

Cleaned phone:
${cleanedPhone}
First invoice match:
${firstMatch ? `Year: ${firstMatch[1]}, Number: ${firstMatch[2]}` : "No match"}`;
});
