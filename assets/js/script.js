// https://www.mailercheck.com/articles/email-validation-javascript

function validateEmail(email) {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);

}

document.querySelector('form').addEventListener('submit', function (event) {

  event.preventDefault(); // Prevent the form from submitting

  const emailInput = document.querySelector('#email');

  // const errorMessage = document.getElementById('error-message');

  if (validateEmail(emailInput.value)) {

    // errorMessage.textContent = ''; // Clear any previous error message

    alert('Email is valid! Form submitted.');

    // You can add your form submission logic here

  }
  // else {

  //   errorMessage.textContent = 'Please enter a valid email address.';

  // }

});




