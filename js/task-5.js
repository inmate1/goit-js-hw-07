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
  const randomColor = getRandomHexColor();
  colorBody.style.backgroundColor = randomColor;
  outputColor.textContent = randomColor;
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