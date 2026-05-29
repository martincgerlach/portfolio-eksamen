const projects = [
  {
    title: "Websiteopgave",
    meta: "Computer information site",
    category: "development",
    description:
      "A computer-information website covering my own MacBook, operating systems, components, statistics, and a small gallery.",
    reflection:
      "I practiced building structured pages and making technical content easier to read.",
    skills: ["HTML", "CSS", "Layout", "Content"],
    liveUrl: "#",
    githubUrl: "https://github.com/martincgerlach/websiteopgave",
    image: "imgs/studiestartsproeven.png",
  },
  {
    title: "Through My Lens",
    meta: "Photography inspiration site",
    category: "portfolio",
    description:
      "A photography inspiration site exploring calm nature, living creatures, and urban energy through image-led category pages.",
    reflection:
      "I worked with image selection, mood, navigation, and visual hierarchy across several pages.",
    skills: ["Photography", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/martincgerlach/Through-my-lens",
    image: "imgs/emne-site.png",
  },
  {
    title: "AquaShield",
    meta: "Emergency guidance website",
    category: "campaign",
    description:
      "A tsunami emergency guide with safety actions, an interactive house diagram, a quick checklist, and a personal emergency plan.",
    reflection:
      "I focused on turning serious information into clear actions and interactive choices.",
    skills: ["HTML", "CSS", "JavaScript", "Forms", "UX"],
    liveUrl: "#",
    githubUrl: "https://github.com/martincgerlach/AquaShield",
    image: "imgs/emergency-site.png",
  },
  {
    title: "Virksomhedssite",
    meta: "Company website",
    category: "development",
    description:
      "This assignment runs from 27 April to 29 May 2026, so the finished case, screenshots, and repository link will be added when the project is ready.",
    reflection:
      "The focus will be on planning, collaboration, design choices, and building a finished company website.",
    skills: ["Planning", "Design", "Development"],
    liveUrl: "#",
    githubUrl: "#",
    image: "",
  },
];

const grid = document.querySelector("#project-grid");

function createDevicePreview(project) {
  if (!project.image) {
    const empty = document.createElement("div");
    empty.className = "empty-device";
    empty.innerHTML = "<span>Project preview</span>";
    return empty;
  }

  const laptop = document.createElement("div");
  laptop.className = "laptop laptop-small";
  laptop.innerHTML = `
    <div class="laptop-screen">
      <img src="${project.image}" alt="${project.title} website preview" />
    </div>
    <div class="laptop-base"></div>
  `;

  return laptop;
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "work-card";
  card.dataset.category = project.category;

  const skills = project.skills
    .map((skill) => `<span>${skill}</span>`)
    .join("");
  const links = [
    project.liveUrl !== "#" ? `<a href="${project.liveUrl}">Live preview</a>` : "",
    project.githubUrl !== "#" ? `<a href="${project.githubUrl}">GitHub</a>` : "",
  ]
    .filter(Boolean)
    .join("");

  card.append(createDevicePreview(project));
  card.insertAdjacentHTML(
    "beforeend",
    `
      <div class="work-card-text">
        <h3>${project.title}</h3>
        <p class="project-meta">${project.meta}</p>
        <p>${project.description}</p>
        <p class="project-reflection">${project.reflection}</p>
        <div class="skill-list" aria-label="Skills used">${skills}</div>
        ${links ? `<div class="project-links">${links}</div>` : ""}
      </div>
    `,
  );

  return card;
}

function renderProjects() {
  grid.innerHTML = "";

  projects.forEach((project) => grid.append(createProjectCard(project)));
}

renderProjects();
