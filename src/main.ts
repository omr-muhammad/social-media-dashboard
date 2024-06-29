import "./style.scss";

// APPLY USER's PREFERABLE THEME
window.onload = function () {
  if (
    localStorage.getItem("theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
    applyDark();
};

// DARK & LIGHT THEME

// Variables
const themeToggler = document.querySelector(
  "[data-change-theme]"
) as HTMLDivElement;
const removableBall = document.querySelector(
  "[data-switch]"
) as HTMLSpanElement;

// Event Listener
themeToggler.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    removableBall.classList.remove("toggle");
    setThemeInLocalStorage("theme", "");
    return;
  }

  applyDark();
});

// Helper Functions

// -1) Set Theme in LocalStorage
function setThemeInLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}

// -2) Add Dark Theme & Update in LocalStorage
function applyDark() {
  document.documentElement.classList.add("dark");
  removableBall.classList.add("toggle");

  // Update LocalStorage Theme
  setThemeInLocalStorage("theme", "dark");
}
