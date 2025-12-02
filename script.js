// Set current year in footer
document.getElementById("year").textContent =
  new Date().getFullYear();

// Simple theme toggle (light/dark-ish)
const toggle = document.getElementById("theme-toggle");
let dark = true;

toggle.addEventListener("click", () => {
  dark = !dark;
  document.body.classList.toggle("light-theme", !dark);
});
