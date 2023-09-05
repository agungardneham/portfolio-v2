//Form validation
const contactForm = document.querySelector("#contactForm");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const error = document.querySelector("#error");

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(email)) {
    return true;
  } else {
    return false;
  }
}

function validateMessage(message) {
  if (message.length <= 50 && message.length > 0) {
    return 1;
  } else if (message.length === 0) {
    return 2;
  } else {
    return 3;
  }
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const errorMessage = [];
  const userEmail = validateEmail(email.value);
  const userMessage = validateMessage(message.value);

  if (userEmail === false) {
    errorMessage.push("Email is not valid");
  }
  if (userMessage === 2) {
    errorMessage.push("Please fill the message");
  } else if (userMessage === 3) {
    errorMessage.push("Message is too long");
  }
  if (errorMessage.length > 0) {
    e.preventDefault();
    error.innerHTML = errorMessage.join(", ");
  }
});
