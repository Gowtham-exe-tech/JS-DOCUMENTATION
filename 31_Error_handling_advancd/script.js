class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class PaymentError extends Error {
  constructor(message, options = {}) {
    super(message, options);
    this.name = "PaymentError";
  }
}

function validateOrder(order) {
  if (!order.email) {
    throw new ValidationError("Email is required", "email");
  }
  if (order.total <= 0) {
    throw new ValidationError("Order total must be greater than zero", "total");
  }
}

async function chargePayment(order, shouldFail) {
  await new Promise(resolve => setTimeout(resolve, 600));
  if (shouldFail) {
    const gatewayError = new Error("Payment gateway rejected transaction");
    
    // Wrap the low-level error with a business-level error.
    throw new PaymentError("Payment could not be completed", {
      cause: gatewayError
    });
  }
  return { transactionId: "TXN-" + Date.now() };
}

async function processCheckout(order, mode) {

  // Error can propagate from this function to the UI layer.
  validateOrder(order);
  if (mode === "unknown") {
    throw new Error("Unexpected internal checkout failure");
  }
  const payment = await chargePayment(order, mode === "payment");
  return payment;
}

function showUserMessage(message) {
  document.querySelector("#user").textContent = message;
}

async function handleCheckout(mode) {
  const order = {
    email: mode === "validation" ? "" : "customer@example.com",
    total: 2499
  };
  try {
    const result = await processCheckout(order, mode);
    showUserMessage(
      `Checkout successful. Transaction: ${result.transactionId}`
    );
  } catch (error) {

    // Detailed information belongs in developer logs.
    console.error("Checkout error:", error);
    console.error("Stack:", error.stack);
    console.error("Original cause:", error.cause);

    // User gets a safe and meaningful message.
    if (error instanceof ValidationError) {
      showUserMessage(
        `Please fix the ${error.field} field: ${error.message}`
      );
    } else if (error instanceof PaymentError) {
      showUserMessage("Payment failed. Please try another payment method.");
    } else {
      showUserMessage("Something went wrong. Please try again.");
    }
  } finally {
    console.log("Checkout request finished.");
  }
}

document.querySelectorAll("button[data-case]").forEach(button => {
  button.addEventListener("click", () => {
    handleCheckout(button.dataset.case);
  });
});
