const sections = [...document.querySelectorAll("[data-section]")];
const header = document.querySelector(".header");
const navLinks = [...document.querySelectorAll(".nav-link")];

let prevYPosition = scrollY;
let direction = "up";

const options = {
  rootMargin: `${header.clientHeight * -1}px`,
  threshold: 0,
};

const getTargetSection = (entry) => {
  const index = sections.findIndex((section) => section == entry.target);

  if (index >= sections.length - 1) {
    return entry.target;
  } else {
    return sections[index + 1];
  }
};

const updateColours = (target) => {
  const theme = target.dataset.section;
  header.setAttribute("data-theme", theme);
};

const shouldUpdate = (entry) => {
  if (direction === "down" && !entry.isIntersecting) {
    return true;
  }

  if (direction === "up" && entry.isIntersecting) {
    return true;
  }
  return false;
};

const updateMarker = (target) => {
  const id = target.id;
  if (!id) return;

  let link = navLinks.find((el) => {
    return el.getAttribute("href") === `#${id}`;
  });

  link = link || navLinks[0];

  const distanceFromLeft = link.getBoundingClientRect().left;

  header.style.setProperty("--markerWidth", `${link.clientWidth}px`);
  header.style.setProperty("--markerLeft", `${distanceFromLeft}px`);
};

const onIntersect = (entries) => {
  entries.reverse().forEach((entry) => {
    if (window.scrollY > prevYPosition) {
      direction = "down";
    } else {
      direction = "up";
    }

    prevYPosition = window.scrollY;

    const target =
      direction === "down" ? getTargetSection(entry) : entry.target;

    if (shouldUpdate(entry)) {
      updateColours(target);
      updateMarker(target);
    }
  });
};

const observer = new IntersectionObserver(onIntersect, options);

sections.forEach((section) => {
  observer.observe(section);
});
