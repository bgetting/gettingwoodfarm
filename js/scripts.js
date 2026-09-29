/* Setup (all functions that should run on page load) */
const setup = () => {
  addConsoleWarning();
}
document.addEventListener("DOMContentLoaded", setup);

/* Add a console warning */
const addConsoleWarning = () => {
  const warningStyle = "color:red; font-size:24px; font-weight: bold; -webkit-text-stroke: 1px black;";
  const infoStyle = "font-size: 14px;";

  console.log("%c🌲🌲🌲 Hi! 🌲🌲🌲", warningStyle);
  console.log("%cIf you break this website, you agree to adopt a tree on our farm 🤪", infoStyle);
};
