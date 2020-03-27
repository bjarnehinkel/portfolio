import { animations } from "animations.js";

const button = document.querySelector('.continue-link');
const banner = document.querySelector('.banner');

const bounce = [
  {
    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "center bottom",
    offset: 0
  },
  {
    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "center bottom",
    offset: 0.2
  },
  {
    easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    transform: "translate3d(0, -30px, 0)",
    transformOrigin: "center bottom",
    offset: 0.4
  },
  {
    easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    transform: "translate3d(0, -30px, 0)",
    transformOrigin: "center bottom",
    offset: 0.43
  },
  {
    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "center bottom",
    offset: 0.53
  },
  {
    easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    transform: "translate3d(0, -15px, 0)",
    transformOrigin: "center bottom",
    offset: 0.7
  },
  {
    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "center bottom",
    offset: 0.8
  },
  {
    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    transform: "translate3d(0, -4px, 0)",
    transformOrigin: "center bottom",
    offset: 0.9
  },
  {
    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "center bottom",
    offset: 1
  }
];

const timing = {
  duration: 1000,
  fill: "forwards",
  iterations: 1,
  delay: 4000,
  endDelay: 0
};

const readMoreAnimation = () => {
  button.animate(bounce, timing);
};

export { readMoreAnimation };
