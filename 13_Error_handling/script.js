const approveBtn = document.getElementById("approvebtn");
const message = document.getElementById("message");

approveBtn.addEventListener("click", approveExpense);

async function approveExpense() {
    try {
        message.textContent = "Approving expense...";
        approveBtn.disabled = true;

        const response = await fetch("https://example.com/api",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });

        // fetch() doesn't throw for HTTP errors like 404 or 500.
        // We manually check the response.
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        message.textContent = "Expense approved successfully.";
        console.log(data);

    } catch (error) {
        console.error("Approval failed:", error);
        message.textContent =
            "Unable to approve the expense. Please try again.";

    } finally {
        approveBtn.disabled = false;
    }
}