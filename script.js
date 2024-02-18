function validateEmail() {
  const emailInput = document.querySelector(".email");
  const error = document.querySelector(".icon-error");
  const para = document.querySelector(".warning");
  const emailValue = emailInput.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   

  if (emailRegex.test(emailValue)) {
    error.classList.add("hidden");
    para.classList.add("hidden");
  } else {
    error.classList.remove("hidden");
    para.classList.remove("hidden");
  }
}

