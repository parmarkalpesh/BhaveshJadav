const custom = document.querySelector(".custom");
// const custom = document.getElementById('.custom');
// const cursorBig = document.querySelector(".big");
const cursorStyle = custom.style;

document.addEventListener('mousemove', e => {
  cursorStyle.top = `${e.clientY - custom.offsetHeight/2}px`;
  cursorStyle.left = `${e.clientX - custom.offsetWidth/2}px`;
});

// const positionElement = (e) => {
  // const mouseY = e.clientY;
  // const mouseX = e.clientX;

  // custom.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  // cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
// };

// window.addEventListener("mousemove", positionElement);
