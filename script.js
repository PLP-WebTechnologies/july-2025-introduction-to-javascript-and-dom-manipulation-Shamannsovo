// ===============================
// Part 1: Variables & Conditionals
// ===============================
let defaultName = "Friend";       // variable declaration
const maxItems = 20;              // constant declaration
let isDark = false;               // track theme

// ===============================
// Part 2: Custom Functions (at least 2)
// ===============================
function greetUser(name, age) {
  // Conditional based on age
  if (age >= 18) {
    return `Hello, ${name}! You are an adult.`;
  } else if (age > 0) {
    return `Hey, ${name}! You are still a minor.`;
  } else {
    return `Hello, ${name}!`;
  }
}

function makeNumberArray(n) {
  // Ensure n is within allowed range
  if (n < 1) n = 1;
  if (n > maxItems) n = maxItems;
  const arr = [];
  for (let i = 1; i <= n; i++) {   // Loop example #1 (for loop)
    arr.push(i);
  }
  return arr;
}

// An extra utility function (optional)
function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle("dark");           // DOM interaction #2 (toggle class)
}

// ===============================
// Part 3: Loops (at least 2 examples)
// ===============================
// We'll also use a while loop when clearing list items
function clearList(ul) {
  let removed = 0;
  while (ul.firstChild) {        // Loop example #2 (while loop)
    ul.removeChild(ul.firstChild);                 // DOM interaction #3 (removeChild)
    removed++;
  }
  return removed;
}

// ===============================
// Part 4: DOM Interactions (at least 3)
// - change textContent
// - create/append elements
// - toggle class / remove elements
// ===============================
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const greetBtn = document.getElementById("greetBtn");
const message = document.getElementById("message");
const countInput = document.getElementById("countInput");
const makeListBtn = document.getElementById("makeListBtn");
const list = document.getElementById("list");
const themeBtn = document.getElementById("themeBtn");

// Event: Greet
greetBtn.addEventListener("click", () => {
  const name = (nameInput.value || defaultName).trim();
  const age = Number(ageInput.value || 0);
  const text = greetUser(name, age);
  message.textContent = text;                           // DOM interaction #1 (textContent)
});

// Event: Make list
makeListBtn.addEventListener("click", () => {
  clearList(list);                                      // remove old <li> items
  const n = Number(countInput.value || 5);
  const items = makeNumberArray(n);
  // Create and append list items
  for (const num of items) {
    const li = document.createElement("li");
    li.textContent = `Item ${num}`;
    list.appendChild(li);                               // DOM interaction #4 (appendChild)
  }
});

// Event: Toggle theme
themeBtn.addEventListener("click", () => {
  toggleTheme();                                        // toggles body class
});