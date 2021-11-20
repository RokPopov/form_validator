const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Callbacks

function showError(i, message) {
  const formControl = i.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(i) {
  const formControl = i.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
}

function checkEmail(i) {
  var regularExpression =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regularExpression.test(i.value.trim())) {
    showSuccess(i);
  } else {
    showError(i, "Email address is not valid");
  }
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

// check input length
function checkLength(i, min, max) {
  if (i.value.length < min) {
    showError(i, `${getFieldName(i)} must be at least ${min} characters`);
  } else if (i.value.length > max) {
    showError(i, `${getFieldName(i)} must be less than ${max} characters`);
  } else {
    showSuccess(i);
  }
}

function checkPasswordsMatch(i1, i2) {
  if (i1.value !== i2.value) {
    showError(i2, "Passwords do not match");
  } else {
    showSuccess(i1, i2);
  }
}

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 20);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
