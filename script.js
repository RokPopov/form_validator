const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Callbacks

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
}

function validateEmail(email) {
  var regularExpression =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regularExpression.test(String(email).toLowerCase());
}

// check required fields
function checkRequired(inputArray) {
  inputArray.forEach(function (i) {
    if (i.value.trim() === "") {
      showError(i, `${getFieldName(i)} is required`);
    } else {
      showSuccess(i);
    }
  });
}

// get field name
function getFieldName(i) {
  return i.id.charAt(0).toUpperCase() + i.id.slice(1);
}

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
});
