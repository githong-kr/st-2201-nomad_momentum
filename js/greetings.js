const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName';
const LOGIN_AREA = 'login-form';
const GREETING_AREA = 'greeting';

let userName = localStorage.getItem(USERNAME_KEY);

const toggleElement = (elementName) => {
  if (elementName === LOGIN_AREA) {
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
  } else if (elementName === GREETING_AREA) {
    // set greeting message
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.toggle(HIDDEN_CLASSNAME);
  }
};

const onLoginSubmit = (event) => {
  // prevent form event let page refresh
  event.preventDefault();

  // get userName and save local storage
  userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);

  toggleElement(LOGIN_AREA);
  toggleElement(GREETING_AREA);
};

if (userName === null) {
  // register submit event listener
  loginForm.addEventListener('submit', onLoginSubmit);
  // show login-form
  toggleElement(LOGIN_AREA);
} else {
  // set greeting message
  greeting.innerText = `Hello ${userName}`;
  // show greeting
  toggleElement(GREETING_AREA);
}
