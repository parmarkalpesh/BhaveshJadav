const custom = document.querySelector(".custom");
const cursorStyle = custom.style;

document.addEventListener('mousemove', e => {
  cursorStyle.top = `${e.clientY - custom.offsetHeight/2}px`;
  cursorStyle.left = `${e.clientX - custom.offsetWidth/2}px`;
});
