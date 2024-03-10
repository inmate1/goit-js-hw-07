function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
input.addEventListener('input', handleInput);
createBtn.addEventListener('click', handleCreate);
destroyBtn.addEventListener('click', handleDestroy);

let amount;
function handleInput(event) {
  amount = input.value;
}

function handleCreate(event) {
  handleDestroy();
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  input.value = '';
  amount = '';
}

function handleDestroy() {
  boxes.innerHTML = '';
}

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const boxElement = `
       <div class="box-item" style= "background-color: ${getRandomHexColor()}; width: ${boxSize}px; height:${boxSize}px; margin-right: 16px"></div>`;
    boxes.insertAdjacentHTML('afterbegin', boxElement);

    boxSize += 10;
  }
}

const hoverBtn = function () {
  destroyBtn.style.backgroundColor = '#ff4e4e';
  destroyBtn.onmouseover = () => {
    destroyBtn.style.backgroundColor = '#ff7070';
  };
  destroyBtn.onmouseout = () => {
    destroyBtn.style.backgroundColor = '#ff4e4e';
  };
};
hoverBtn();
