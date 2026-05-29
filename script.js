const testButton = document.querySelector("#test-button");
const testContent = document.querySelector("#test-content");

// Denne knap viser og skjuler brugertest-planen.
// Det er almindelig JavaScript med en event listener.
if (testButton && testContent) {
  testButton.addEventListener("click", function () {
    testContent.classList.toggle("hidden");

    if (testContent.classList.contains("hidden")) {
      testButton.textContent = "Vis brugertest-plan";
    } else {
      testButton.textContent = "Skjul brugertest-plan";
    }
  });
}
