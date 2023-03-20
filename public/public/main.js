(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


// form validations
// to be fixed not working 
const nameRegex = /^[A-Za-z ]{2,30}$/;
const numberRegex = /^\+?\{5,15}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const subjectRegex = /^.{2,30}$/;

const validateForm = () => {
  const nameInput = document.querySelector('input[placeholder="YOUR FULL NAME"]');
  const numberInput = document.querySelector('input[name="number"]');
  const emailInput = document.querySelector('input[type="email"]');
  const subjectInput = document.querySelector('input[name="subject"]');

  if (!nameRegex.test(nameInput.value.trim())) {
    alert("Please enter a valid name (2-30 letters, no numbers or special characters).");
    return false;
  }

  if (!numberRegex.test(numberInput.value.trim())) {
    alert("Please enter a valid phone number (5-15 digits, optional + prefix).");
    return false;
  }

  if (!emailRegex.test(emailInput.value.trim())) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!subjectRegex.test(subjectInput.value.trim())) {
    alert("Please enter a subject (2-30 characters).");
    return false;
  }

  return true;
};

const form = document.querySelector('.contact-form');
form.addEventListener('submit', event => {
  event.preventDefault(); // Prevent form submission until validated
  if (validateForm()) {
    form.submit(); // Submit the form if validation passed
  }
});