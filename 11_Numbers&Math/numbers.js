let amountInput = "90.99";

const amount = parseFloat(amountInput);

if (Number.isNaN(amount)) {
    console.log("Invalid amount");
} else {
    const displayAmount = amount.toFixed(2);

    console.log(`₹${displayAmount}`);
}