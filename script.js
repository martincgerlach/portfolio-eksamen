const projects = [
  {
    title: "Min første MMD-website",
    theme: "T01",
    status: "Kort læringscase",
    meta: "Intro til HTML og CSS",
    category: "foundation",
    description:
      "Mit første lille website på uddannelsen, hvor fokus var at forstå filer, struktur, HTML-elementer og basal styling.",
    reflection:
      "Jeg lærte, at et website først og fremmest skal have en tydelig struktur, før det giver mening at gøre det visuelt mere avanceret.",
    skills: ["HTML", "CSS", "Filstruktur", "Basis layout"],
    caseUrl: "cases/t01-first-mmd-website.html",
    liveUrl: "",
    githubUrl: "",
    image: "imgs/t01-first-mmd-website.png",
  },
  {
    title: "Websiteopgave",
    theme: "T02",
    status: "Færdig case",
    meta: "Computersite",
    category: "development",
    description:
      "Et informationssite om computere med sider om min egen computer, operativsystemer, komponenter, statistik og et galleri.",
    reflection:
      "Jeg øvede semantisk HTML, CSS-grid, navigation, billedbrug og organisering af flere undersider.",
    skills: ["HTML", "CSS", "Grid", "Navigation", "Indhold"],
    caseUrl: "cases/t02-websiteopgave.html",
    liveUrl: "https://martincgerlach.github.io/websiteopgave/",
    githubUrl: "https://github.com/martincgerlach/websiteopgave",
    image: "imgs/t02-websiteopgave.png",
  },
  {
    title: "Through My Lens",
    theme: "T03",
    status: "Færdig case",
    meta: "Fotografi-inspirationssite",
    category: "ux-ui",
    description:
      "Et visuelt site om fotografi med kategorier for natur, levende motiver og byliv, bygget omkring stemning, billedvalg og navigation.",
    reflection:
      "Jeg arbejdede med visuel hierarki, mood, målgruppe, kategorisering og en navigation der skulle føles enkel på tværs af sider.",
    skills: ["UX/UI", "HTML", "CSS", "JavaScript", "Billedhierarki"],
    caseUrl: "cases/t03-through-my-lens.html",
    liveUrl: "https://martincgerlach.github.io/Through-my-lens/",
    githubUrl: "https://github.com/martincgerlach/Through-my-lens",
    image: "imgs/t03-through-my-lens.png",
  },
  {
    title: "AquaShield",
    theme: "T04",
    status: "Færdig case",
    meta: "Beredskabssite",
    category: "interface",
    description:
      "Et tsunami-guide site med sikkerhedshandlinger, interaktivt husdiagram, hurtig tjekliste og en personlig nødplan.",
    reflection:
      "Jeg fokuserede på at gøre alvorlig information handlingsorienteret med klare valg, interaktioner og tydelige prioriteter.",
    skills: ["HTML", "CSS", "JavaScript", "Formularer", "UX writing"],
    caseUrl: "cases/t04-aquashield.html",
    liveUrl: "https://martincgerlach.github.io/AquaShield/",
    githubUrl: "https://github.com/martincgerlach/AquaShield",
    image: "imgs/t04-aquashield.png",
  },
  {
    title: "Nørrebro Posthus",
    theme: "T05",
    status: "Færdig case",
    meta: "Virksomhedssite",
    category: "content",
    description:
      "Et redesign af et lokalt afhentningssted, hvor brugeren hurtigt skal kunne finde adresse, åbningstider, leverandører og kontakt.",
    reflection:
      "Jeg arbejdede med indholdsstruktur, brugerbehov, lokal identitet, responsiv navigation og et mere overskueligt informationsflow.",
    skills: ["Indhold", "Redesign", "HTML", "CSS", "JavaScript"],
    caseUrl: "cases/t05-noerrebro-posthus.html",
    liveUrl: "https://sakura-virksomhedssite.github.io/virksomhedssite/",
    githubUrl: "https://github.com/Sakura-Virksomhedssite/virksomhedssite",
    image: "imgs/t05-noerrebro-posthus.png",
  },
];

const grid = document.querySelector("#project-grid");

function createDevicePreview(project) {
  const laptop = document.createElement("div");
  laptop.className = "laptop laptop-small";
  laptop.innerHTML = `
    <div class="laptop-screen">
      <img src="${project.image}" alt="Preview af ${project.title}" loading="lazy" />
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
    `<a class="button button-primary" href="${project.caseUrl}">Læs case</a>`,
    project.liveUrl
      ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer">Live site</a>`
      : "",
    project.githubUrl
      ? `<a href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub</a>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  card.append(createDevicePreview(project));
  card.insertAdjacentHTML(
    "beforeend",
    `
      <div class="work-card-text">
        <p class="project-meta">${project.theme} / ${project.status}</p>
        <h2>${project.title}</h2>
        <p class="project-type">${project.meta}</p>
        <p>${project.description}</p>
        <p class="project-reflection">${project.reflection}</p>
        <div class="skill-list" aria-label="Færdigheder brugt i ${project.title}">${skills}</div>
        <div class="project-links">${links}</div>
      </div>
    `,
  );

  return card;
}

function renderProjects() {
  if (!grid) return;
  grid.innerHTML = "";

  projects.forEach((project) => grid.append(createProjectCard(project)));
}

renderProjects();
