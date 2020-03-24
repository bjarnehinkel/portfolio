import { animations } from "animations.js"

const card = document.querySelector('.plan-your-night')
const heading = document.querySelector('.planyournight-heading')
const description = document.querySelector('.hover-content')

const pynHover = () => {
  card.addEventListener('mouseover', (event) => {
    // heading.classList.add('hidden');
    move('.planyournight-heading').set('display', 'none').end();
    description.classList.remove('hidden');
  });
  card.addEventListener('mouseout', (event) => {
    // description.classList.add('hidden');
    move('.hover-content').set('display', 'none').end();
    heading.classList.remove('hidden');
  });
};


export { pynHover };
