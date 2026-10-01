/* Setup (all functions that should run on page load) */
const setup = () => {
  addConsoleWarning();
};
document.addEventListener("DOMContentLoaded", setup);

/* Add a console warning */
const addConsoleWarning = () => {
  const warningStyle = "color:red; font-size:24px; font-weight: bold; -webkit-text-stroke: 1px black;";
  const infoStyle = "font-size: 14px;";

  console.log("%c🌲🌲🌲 Hi! 🌲🌲🌲", warningStyle);
  console.log("%cIf you break this website, you agree to adopt a tree on our farm 🤪", infoStyle);
};

/* Reposition background images */
const reposition = () => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const aspectRatio = 16 / 9;
  const windowAspectRatio = windowWidth / windowHeight;
  const backgroundSize = (windowAspectRatio > aspectRatio) ? windowWidth + 'px auto' : 'auto ' + windowHeight + 'px';
  const containers = document.getElementsByClassName('bg-container');
  for (const container of containers) {
    container.style.backgroundSize = backgroundSize;
  }
  const images = document.getElementsByClassName('bg-container');
  for (const image of images) {
    image.style.visibility = 'visible';
  }
  const tmps = document.getElementsByClassName('bg-tmp');
  for (const tmp of tmps) {
    tmp.classList.add('faded');
  }
};
window.addEventListener("load", reposition);
window.addEventListener("resize", reposition);
