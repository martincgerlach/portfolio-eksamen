const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-project-type]");

function showProjects(chosenFilter) {
  projectCards.forEach((card) => {
    const shouldShow =
      chosenFilter === "alle" || card.dataset.projectType === chosenFilter;

    card.hidden = !shouldShow;
    card.classList.toggle("is-hidden", !shouldShow);
  });
}

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

    showProjects(chosenFilter);
  });
});

const activeFilterButton = document.querySelector(
  '[data-filter][aria-pressed="true"]'
);

if (activeFilterButton) {
  showProjects(activeFilterButton.dataset.filter);
}
