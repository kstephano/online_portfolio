const grid = document.querySelector(".tech-grid");

const gridOptions = {
  rootMargin: "0px",
  threshold: 0.5,
};

const shouldToggle = (entry, toggle) => {
  if (toggle === "down") {
    if (
      !entry.target.classList.contains("scrolledUp") &&
      entry.isIntersecting &&
      direction !== "up"
    ) {
      return true;
    } else return false;
  }

  if (toggle === "up") {
    if (
      !entry.target.classList.contains("scrolledDown") &&
      entry.isIntersecting &&
      direction !== "down"
    ) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};

const onIntersectGrid = (entries) => {
  entries.forEach((entry) => {
    if (window.scrollY > prevYPosition) {
      direction = "down";
    } else {
      direction = "up";
    }

    prevYPosition = window.scrollY;

    entry.target.classList.toggle("scrolledDown", shouldToggle(entry, "down"));
    entry.target.classList.toggle("scrolledUp", shouldToggle(entry, "up"));
  });
};

let gridObserver = new IntersectionObserver(onIntersectGrid, options);

gridObserver.observe(grid);

// const elementInView = (el, scrollOffset = 0) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
//   );
// };

// const displayScrollElement = (element) => {
//   element.classList.add("scrolled");
// };

// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
// };

// const handleScrollAnimation = () => {
//   const techGrid = document.querySelector(".tech-grid");
//   console.log(techGrid);
//   console.log(elementInView(techGrid, 1000));

//   if (elementInView(techGrid, 1000)) {
//     displayScrollElement(techGrid);
//   } else {
//     hideScrollElement(techGrid);
//   }
// };

// window.addEventListener("scroll", () => {
//   handleScrollAnimation();
// });
