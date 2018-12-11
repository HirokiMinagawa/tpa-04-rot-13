
const formPreventDefault = () => {
  const form = document.querySelector('#container .form-convert');
  form.addEventListener('submit', evt => evt.preventDefault());
}

const initDOMAndListeners = callback => {
  const btn = document.querySelector('#container .btn-convert');
  btn.addEventListener('click', callback);
}

export {
  formPreventDefault,
  initDOMAndListeners,
};
