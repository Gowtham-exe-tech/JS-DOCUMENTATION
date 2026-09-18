function setupButton() {
    let count = 0;

    const button = document.getElementById("btn");
    const countDisplay = document.getElementById("count");

    button.addEventListener("click", function () {
        count++;
        countDisplay.textContent = `Clicked ${count} times`;
    });
}

setupButton();