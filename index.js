const form = document.querySelector("form");
const input = document.querySelector("input");
const submit = document.querySelector("button");
const label = document.querySelector("label");
const error = document.querySelector(".error");

form.addEventListener("submit", emailValidation);
submit.addEventListener("click", emailValidation);

function emailTest(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function emailValidation(event) {
  const inputValue = input.value.trim();
  if (!emailTest(inputValue)) {
    event.preventDefault();
    label.style.display = "block";
    error.style.display = "block";
    input.style.borderColor = "#f96262";
    input.style.borderWidth = "2px";
  } else {
    label.style.display = "none";
    error.style.display = "none";
  }
}
