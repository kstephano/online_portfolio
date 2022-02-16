const projects = [...document.querySelectorAll(".project-div")];

projectsOptions = {
  threshold: 0.2,
};

const onIntersectProject = (entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
};

const projectObserver = new IntersectionObserver(
  onIntersectProject,
  projectsOptions
);

projects.forEach((project) => {
  projectObserver.observe(project);
});
