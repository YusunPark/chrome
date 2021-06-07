const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
text = document.querySelector("h4");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text)

}

function handleSumit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(text) {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSumit);
  greeting.classList.remove(SHOWING_CN);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  console.log(currentUser);
  if (currentUser === null) {
    askForName(currentUser);
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
