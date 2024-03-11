const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

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