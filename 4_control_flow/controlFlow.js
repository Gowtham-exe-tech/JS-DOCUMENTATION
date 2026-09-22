const amount = 15000;

if (amount <= 5000) {
    console.log("Accounts approval");
} else if (amount <= 10000) {
    console.log("Manager approval");
} else {
    console.log("MD approval");
}

const status = "approved";
switch (status) {
    case "pending":
        console.log("Waiting for approval");
        break;

    case "approved":
        console.log("Approved");
        break;

    case "rejected":
        console.log("Rejected");
        break;

    default:
        console.log("Unknown status");
}