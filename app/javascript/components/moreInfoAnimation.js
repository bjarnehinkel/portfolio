const card = document.querySelector('.plan-your-night')
const heading = document.querySelector('.planyournight-heading')
const description = document.querySelector('.hover-content')

const pynHover = () => {
  card.addEventListener('mouseover', (event) => {
    heading.classList.add('hidden');
    description.classList.remove('hidden');
  });
  card.addEventListener('mouseout', (event) => {
    description.classList.add('hidden');
    heading.classList.remove('hidden');
  });
};


export { pynHover };
