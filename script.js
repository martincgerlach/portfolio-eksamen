const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-project-type]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const chosenFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      if (filterButton === button) {
        filterButton.setAttribute("aria-pressed", "true");
      } else {
        filterButton.setAttribute("aria-pressed", "false");
      }
    });

    projectCards.forEach((card) => {
      if (chosenFilter === "alle" || card.dataset.projectType === chosenFilter) {
        card.hidden = false;
      } else {
        card.hidden = true;
      }
    });
  });
});
