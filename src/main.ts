import "./style.scss";

const themeToggler = document.querySelector(
  "[data-change-theme]"
) as HTMLDivElement;

themeToggler.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  document.querySelector("[data-switch]")?.classList.toggle("toggle");
});
