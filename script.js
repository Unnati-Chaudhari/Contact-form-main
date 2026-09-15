const form = document.querySelector("form");
const firstName = document.querySelector(".name");
const lastName = document.querySelector(".surname");
const email = document.querySelector(".email");
const message = document.querySelector(".msg_content");
const checkBox = document.querySelector("#consent");
const successMessage = document.querySelector("#successMessage");
const submitBtn = document.querySelector('button[type = "submit"]');
const firstNameError = document.querySelector("#first_name_error");
const lastNameError = document.querySelector("#last_name_error");
const emailError = document.querySelector("#email_error");
const queryError = document.querySelector("#query_error");
const msgError = document.querySelector("#msg_error");
const consentError = document.querySelector("#consent_error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedQuery = document.querySelector('input[name="query"]:checked');

  let isValid = true;

  const namePattern = /^[A-Za-z]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (firstName.value.trim() === "") {
    firstNameError.textContent = "This field is required";
    firstName.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  } else if (!namePattern.test(firstName.value.trim())) {
    firstNameError.textContent = "Please enter a valid name";
    firstName.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  } else {
    firstNameError.textContent = "";
  }

  if (lastName.value.trim() === "") {
    lastNameError.textContent = "This field is required";
    lastName.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  } else if (!namePattern.test(lastName.value.trim())) {
    lastNameError.textContent = "Please enter a valid name";
    lastName.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  } else {
    lastNameError.textContent = "";
  }

  if (email.value.trim() === "") {
    emailError.textContent = "This field is required";
    email.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  } else if (emailPattern.test(email.value.trim())) {
    emailError.textContent = "";
  } else {
    emailError.textContent = "Please enter a valid email address";
    email.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  }

  if (selectedQuery === null) {
    queryError.textContent = "Please select a query type";
    isValid = false;
  } else {
    queryError.textContent = "";
  }

  if (message.value.trim() === "") {
    msgError.textContent = "This field is required";
    message.style.borderColor = "hsl(0, 66%, 54%)";
    isValid = false;
  } else {
    msgError.textContent = "";
    message.style.borderColor = "";
  }

  if (!checkBox.checked) {
    consentError.textContent =
      "To submit this form, please consent to being contacted";

    checkBox.style.outline = "2px solid hsl(0, 66%, 54%)";
    checkBox.style.outlineOffset = "2px";

    isValid = false;
  } else {
    consentError.textContent = "";
    checkBox.style.outline = "";
  }

  if (isValid) {
    successMessage.style.display = "block";
    form.reset();
  }
});
