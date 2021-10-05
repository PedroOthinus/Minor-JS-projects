const formElement = document.getElementById("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function showError(input, message) {
  const actualForm = input.parentElement;
  const smallText = actualForm.querySelector("small");
  actualForm.className = "form-control error";
  smallText.innerText = message;
}

function showSucess(input) {
  const actualForm = input.parentElement;
  actualForm.className = "form-control success";
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `Too small, I prefer bigger ones, at the very minimum ${min} characters.`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `Its too big, I dont think it will fit. At max ${max} characters.`
    );
  } else {
    showSucess;
  }
}

function checkValidEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(String(email.value).toLocaleLowerCase()) == false) {
    showError(email, "Not a valid email, dumbass.");
  }
}

function checkIsNotEmpty(inputArr) {
  inputArr.forEach((input) => {
    if (input.value === "") {
      showError(input, "You should put something here, you know?");
    } else {
      showSucess(input);
    }
  });
}

function checkEmailValidity(input) {}

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  checkIsNotEmpty([usernameInput, emailInput, passwordInput]);
  checkLength(usernameInput, 4, 16);
  checkValidEmail(emailInput);
});
