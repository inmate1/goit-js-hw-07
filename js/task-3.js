const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
console.log(textInput);
textInput.addEventListener('input', handleInput);

function handleInput(event) {
  const name = event.currentTarget.value.trim();

  if (name === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = name;
    console.log(output.textContent);
  }
}

textInput.addEventListener('blur', handleBlur);
function handleBlur(event) {
  event.currentTarget.value = '';
}
// wrapper
const titleOutput = document.querySelector('h1');
const paragraph = document.querySelector('p');
const oldElement = document.createElement('div');
paragraph.after(oldElement);

const containerElement = document.createElement('div');

containerElement.appendChild(textInput);
containerElement.appendChild(titleOutput);

const parentElement = oldElement.parentNode;

parentElement.replaceChild(containerElement, oldElement);
// Styles
containerElement.classList.add('wrapper');
containerElement.style.borderRadius = '8px';
containerElement.style.padding = '24px';
containerElement.style.width = '408px';
containerElement.style.height = '136px';
containerElement.style.backgroundColor = '#fff;';
containerElement.style.margin = '0 auto';
titleOutput.style.fontWeight = '600';
titleOutput.style.fontSize = '24px';
titleOutput.style.lineHeight = '133%';
titleOutput.style.letterSpacing = '0.04em';
titleOutput.style.color = '#2e2f4';
