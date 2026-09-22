const startBtn = document.getElementById("startBtn");
const cancelBtn = document.getElementById("cancelBtn");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");

let timeLeft = 10;
let countdownId = null;
let messageTimeoutId = null;


startBtn.addEventListener("click", startCheckout);
cancelBtn.addEventListener("click", cancelCheckout);


function startCheckout() {

    // Prevent multiple timers from being created
    if (countdownId !== null) {
        return;
    }

    timeLeft = 10;
    timeDisplay.textContent = timeLeft;
    message.textContent = "Checkout started.";
    startBtn.disabled = true;
    cancelBtn.disabled = false;

    countdownId = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(countdownId);
            countdownId = null;
            startBtn.disabled = false;
            cancelBtn.disabled = true;
            message.textContent = "Checkout expired!";
            messageTimeoutId = setTimeout(() => {
                message.textContent = "";
                timeLeft = 10;
                timeDisplay.textContent = timeLeft;
            }, 3000);
        }
    }, 1000);
}


function cancelCheckout() {
    clearInterval(countdownId);
    countdownId = null;
    timeLeft = 10;
    timeDisplay.textContent = timeLeft;
    startBtn.disabled = false;
    cancelBtn.disabled = true;
    message.textContent = "Checkout cancelled.";

    messageTimeoutId = setTimeout(() => {
        message.textContent = "";
    }, 3000);
}