const collapsibleBtn = document.querySelector(".collapsible__button");
const hide = document.querySelector(".collapsible__action--visible");
const show = document.querySelector(".collapsible__action--hidden");
const collapsibleСontent = document.querySelector(".collapsible__content");

hide.setAttribute("style", "display: none");
collapsibleСontent.setAttribute("style", "display: none");

let slidein = [
  {
    transform: "translate3D(0, -300px, 0)",
  },
];

let slideout = [
  {
    transform: "translate3D(0, 0, 0)",
  },
];

let animationDuration = {
  duration: 500,
};

collapsibleBtn.onclick = (event) => {
  if (event.target.classList.contains("collapsible__action--visible")) {
    show.setAttribute("style", "display: block");
    hide.setAttribute("style", "display: none");
    collapsibleСontent.animate(slidein, animationDuration).onfinish = () => {
      collapsibleСontent.setAttribute("style", "display: none");
    };
  }
  if (event.target.classList.contains("collapsible__action--hidden")) {
    show.setAttribute("style", "display: none");
    hide.setAttribute("style", "display: block");
    collapsibleСontent.animate(slideout, animationDuration);
    collapsibleСontent.setAttribute("style", "display: block; opacity: 1");
  }
};
