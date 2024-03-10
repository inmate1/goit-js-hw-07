const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  let isFormValid = true;
  let info = {};
  for (let i = 0; i < elements.length - 1; i++) {
    if (elements[i].value === '') {
      isFormValid = false;
      break;
    } else {
      info[elements[i].name] = elements[i].value.trim();
    }
  }

  if (!isFormValid) {
    alert('All form fields must be filled in');
  } else {
    console.log(info);
    event.target.reset();
  }
}
