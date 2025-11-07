// CMPM 121 Smelly Code Activity

// Encapsulate Variable
const state = { count: 0 };

// Extract Function
function applyStateToUI(counterEl: HTMLElement) {
  counterEl.textContent = String(state.count);
  document.title = "Clicked " + state.count;
  document.body.style.backgroundColor = state.count % 2 ? "pink" : "lightblue";
}

function setup() {
  const headingText = "CMPM 121 Project";
  const incrementId = "increment";
  const counterId = "counter";

  document.body.innerHTML = `
    <h1>${headingText}</h1>
    <p>Counter: <span id="${counterId}">0</span></p>
    <button id="${incrementId}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Defined Variables
  const incrementBtn = document.getElementById(incrementId);
  const decrementBtn = document.getElementById("dec");
  const resetBtn = document.getElementById("reset");
  const counterEl = document.getElementById(counterId);

  if (!incrementBtn || !decrementBtn || !resetBtn || !counterEl) return;

  // initialize UI once
  applyStateToUI(counterEl);

  incrementBtn.addEventListener("click", () => {
    state.count += 1;
    applyStateToUI(counterEl);
  });

  decrementBtn.addEventListener("click", () => {
    state.count -= 1;
    applyStateToUI(counterEl);
  });

  resetBtn.addEventListener("click", () => {
    state.count = 0;
    applyStateToUI(counterEl);
  });
}

function start() {
  setup();
}
start();
