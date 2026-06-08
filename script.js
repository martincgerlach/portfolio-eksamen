const menuButton = document.querySelector(".menu-button");
const mainNavigation = document.querySelector(".main-nav");

if (menuButton && mainNavigation) {
  menuButton.addEventListener("click", () => {
    const menuIsOpen = mainNavigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);
    menuButton.setAttribute("aria-label", menuIsOpen ? "Luk menu" : "Åbn menu");
  });

  mainNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNavigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Åbn menu");
    });
  });
}

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
