import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('input[name="email"]');
const inputMessage = form.querySelector('textarea[name="message"]');

const LOCAL_STORAGE_KEY = 'feedback-form-state';


const savedFormState = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedFormState) {
  const { email, message } = JSON.parse(savedFormState);
  inputEmail.value = email;
  inputMessage.value = message;
}


form.addEventListener(
  'input',
  throttle(() => {
    const formState = {
      email: inputEmail.value,
      message: inputMessage.value,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formState));
  }, 500),
);


form.addEventListener('submit', e => {
  e.preventDefault();
  const formState = {
    email: inputEmail.value,
    message: inputMessage.value,
  };
  console.log(formState);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
});