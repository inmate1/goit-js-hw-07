function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const colorBody = document.querySelector('body');
const outputColor = document.querySelector('.color');
btn.addEventListener('click', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  colorBody.style.backgroundColor = getRandomHexColor();
  outputColor.innerHTML = `<span class="color">${getRandomHexColor()}</span>`;
}

const hoverBtn = function () {
  btn.style.backgroundColor = '#4e75ff';
  btn.onmouseover = () => {
    btn.style.backgroundColor = '#6c8cff';
  };
  btn.onmouseout = () => {
    btn.style.backgroundColor = '#4e75ff';
  };
};
hoverBtn();

// btn.addEventListener('blur', handleBlur);
// function handleBlur(event) {
//   colorBody.removeAttribute("style");
//   outputColor.innerHTML = `<span class="color">-</span>`;
// }
