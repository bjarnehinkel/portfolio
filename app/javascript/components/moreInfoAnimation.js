import { animations } from "animations.js"

const card = document.querySelector('.plan-your-night')
const heading = document.querySelector('.planyournight-heading')
const description = document.querySelector('.hover-content')

const fadeIn = {
  easing: "ease",
  opacity: [
    0,
    1
  ]
};

const fadeOut = {
  easing: "ease",
  opacity: [
    1,
    0
  ]
};

const timing = {
  duration: 500,
  fill: "forwards",
  iterations: 1,
  delay: 0,
  endDelay: 0
};

const pynHover = () => {
  card.addEventListener('click', (event) => {
    if (description.classList.contains('hidden')) {
      heading.classList.add('hidden');
      description.classList.remove('hidden');
      description.animate(fadeIn, timing);
    } else {
      heading.classList.remove('hidden');
      description.classList.add('hidden');
      heading.animate(fadeIn, timing);
    }
  });
};


export { pynHover };
