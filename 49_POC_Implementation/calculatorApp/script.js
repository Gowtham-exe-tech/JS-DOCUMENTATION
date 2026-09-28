// keeping the storage key in one variable so I do not mistype the string in two places
const themeStorageKey = "calculatorTheme";
const themeToggle = document.getElementById("themeToggle");
const previousDisplay = document.getElementById("previousDisplay");
const currentDisplay = document.getElementById("currentDisplay");
const buttons = document.getElementById("buttons");

// numbers are stored as strings while typing, because a number type would remove things like "5." or "0.0" before the user finishes typing
let currentInput = "0";
let previousInput = "";
let operator = "";
let waitingForSecondNumber = false;
let justCalculated = false;
let hasError = false;
const operatorSymbols = { "/": "÷", "*": "×", "-": "−", "+": "+" };
let expressionText = "";

function updateDisplay() {
  currentDisplay.textContent = currentInput;
  previousDisplay.textContent = operator
    ? `${previousInput} ${operatorSymbols[operator]}`
    : expressionText;
}

function clearAll() {
  currentInput = "0";
  previousInput = "";
  operator = "";
  expressionText = "";
  waitingForSecondNumber = false;
  justCalculated = false;
  hasError = false;
  updateDisplay();
}

function appendNumber(digit) {
  // after an error or a finished calculation, typing a number should start a fresh calculation like a real calculator
  if (hasError) clearAll();
  if (justCalculated) {
    currentInput = "0";
    expressionText = "";
    justCalculated = false;
  }
  if (waitingForSecondNumber) {
    currentInput = "0";
    waitingForSecondNumber = false;
  }
  // two dots like 1.2.3 is not a valid number so I ignore the second dot
  if (digit === "." && currentInput.includes(".")) return;
  if (currentInput === "0" && digit !== ".") currentInput = digit;
  else currentInput += digit;
  updateDisplay();
}

function deleteLast() {
  if (hasError || justCalculated || waitingForSecondNumber) return;
  currentInput = currentInput.slice(0, -1) || "0";
  updateDisplay();
}

function showError(message) {
  clearAll();
  currentInput = message;
  hasError = true;
  updateDisplay();
}

// I did NOT use eval() to calculate, because eval runs any text as code which is a security risk and bad practice, so I do the maths myself with a switch
function compute() {
  const firstNumber = parseFloat(previousInput);
  const secondNumber = parseFloat(currentInput);
  let result;
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) return null;
      result = firstNumber / secondNumber;
      break;
  }
  // javascript gives 0.1 + 0.2 = 0.30000000000000004 (floating point), so I round to 10 decimals to hide this
  return String(Number(result.toFixed(10)));
}

function chooseOperator(nextOperator) {
  if (hasError) return;
  // user pressed two operators in a row (like 5 + then -), so I just replace the old one instead of calculating
  if (waitingForSecondNumber) {
    operator = nextOperator;
    updateDisplay();
    return;
  }
  // supports chaining like 2 + 3 * 4: finish the first pair before starting the next one
  if (operator) {
    const chained = compute();
    if (chained === null) {
      showError("Cannot divide by 0");
      return;
    }
    currentInput = chained;
  }
  previousInput = currentInput;
  operator = nextOperator;
  waitingForSecondNumber = true;
  justCalculated = false;
  updateDisplay();
}

function calculate() {
  if (!operator || waitingForSecondNumber || hasError) return;
  const result = compute();
  if (result === null) {
    showError("Cannot divide by 0");
    return;
  }
  expressionText = `${previousInput} ${operatorSymbols[operator]} ${currentInput} =`;
  currentInput = result;
  previousInput = "";
  operator = "";
  justCalculated = true;
  updateDisplay();
}

function percent() {
  if (hasError) return;
  currentInput = String(Number((parseFloat(currentInput) / 100).toFixed(10)));
  updateDisplay();
}
// ONE listener on the parent instead of 19 listeners on each button (event delegation), it is less code and new buttons work without extra JS
buttons.addEventListener("click", function (event) {
  // closest() is used because the user may click the text inside the button and not the button itself
  const button = event.target.closest("button");
  if (!button) return;
  const action = button.dataset.action;
  const value = button.dataset.value;
  if (action === "number") appendNumber(value);
  else if (action === "operator") chooseOperator(value);
  else if (action === "equals") calculate();
  else if (action === "clear") clearAll();
  else if (action === "delete") deleteLast();
  else if (action === "percent") percent();
});
// keyboard support so it is comfortable on laptop, reusing the same functions so the logic is not duplicated
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if ((key >= "0" && key <= "9") || key === ".") appendNumber(key);
  else if (["+", "-", "*", "/"].includes(key)) chooseOperator(key);
  else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") deleteLast();
  else if (key === "Escape") clearAll();
});

// ---------- theme ----------
function applyTheme(theme) {
  // the css reads this attribute, so changing it here re-colors the whole page
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}
themeToggle.addEventListener("click", function () {
  const newTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  // localStorage keeps the choice after refresh, it only stores strings which is enough for "light"/"dark"
  localStorage.setItem(themeStorageKey, newTheme);
});
// runs on page load: use the saved theme, and fall back to light if the user never chose one
applyTheme(localStorage.getItem(themeStorageKey) || "light");
