const elementInView = (el, scrollOffset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  const techGrid = document.querySelector(".tech-grid");
  console.log(techGrid);
  console.log(elementInView(techGrid, 1000));

  if (elementInView(techGrid, 1000)) {
    displayScrollElement(techGrid);
  } else {
    hideScrollElement(techGrid);
  }
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
