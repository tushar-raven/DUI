document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");

  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;

  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const slider = document.querySelector(".slider");

const prev = document.querySelector(".left-arrow");
const next = document.querySelector(".right-arrow");

let direction;

next.addEventListener("click", () => {
  direction = -1;
  slider.style.transform = `translate(-25%)`;
});

prev.addEventListener("click", () => {
  direction = 1;
  slider.style.transform = `translate(+25%)`;
});

setInterval(function () {
  direction = -1;
  slider.style.transform = `translate(-25%)`;
}, 5000);

slider.addEventListener("transitionend", () => {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
  }

  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  }

  slider.style.transition = "none";
  slider.style.transform = "translate(0)";
  setTimeout(function () {
    slider.style.transition = "all 0.5s";
  });
});
