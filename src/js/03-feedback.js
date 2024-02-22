
// chatGPT code
/* 
import throttle from "lodash.throttle";

document.addEventListener('DOMContentLoaded', function () {
  const feedbackForm = document.querySelector('.feedback-form');

  // Function to update local storage with throttling
  const updateLocalStorage = throttle(() => {
    const formState = {
      email: feedbackForm.elements['email'].value,
      message: feedbackForm.elements['message'].value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500);

  // Function to load form state from local storage
  const loadFormState = () => {
    const storedState = localStorage.getItem('feedback-form-state');

    if (storedState) {
      const { email, message } = JSON.parse(storedState);
      feedbackForm.elements['email'].value = email;
      feedbackForm.elements['message'].value = message;
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const formState = {
      email: feedbackForm.elements['email'].value,
      message: feedbackForm.elements['message'].value,
    };

    // Clear local storage and form fields
    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();

    // Display form state in console
    console.log('Form State:', formState);
  };

  // Attach event listeners
  feedbackForm.addEventListener('input', updateLocalStorage);
  feedbackForm.addEventListener('submit', handleSubmit);

  // Load form state on page load
  loadFormState();
});
*/

// sir emerson code
/*
import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const emailEl = document.querySelector('label [name="email"]');
const messageEl = document.querySelector('label [name="message"]');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const email = emailEl.value;
  const message = messageEl.value;

  const formData = {
    email,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

onPageReload();

function onPageReload() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)); // "{email, message}"
  if (savedMessage) {
    emailEl.value = savedMessage.email;
    messageEl.value = savedMessage.message;
  }
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault(); //Prevent reloading the page on form submit
  const email = emailEl.value;
  const message = messageEl.value;

  if (email == '' || message == '') {
    alert('Enter both input parameters!');
    form.reset();
    return;
  }

  const formData = { email, message };
  console.log(formData);
  form.reset();

  localStorage.removeItem(STORAGE_KEY);
}

*/

import throttle from 'lodash.throttle';

// input that are being collected from the form
const form = document.querySelector('form.feedback-form');
const emailEl = document.querySelector('label [name="email"]');
const messageEl = document.querySelector('label [name="message"]');

// data storage
const STORAGE_KEY = 'feedback-form-state';

// an event everytime you input something
form.addEventListener('input', throttle(onFormInput, 500));

// function that are being called while typing and store the data and converting into string
function onFormInput() {
  const email = emailEl.value;
  const message = messageEl.value;

  const formData = {
    email,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// calling the function reload the page
onPageReload();

// function that reload the page saving the data from the input into locale storage
function onPageReload() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)); // "{email, message}"
  if (savedMessage) {
    emailEl.value = savedMessage.email;
    messageEl.value = savedMessage.message;
  }
}

// an event that being called to submit the form
form.addEventListener('submit', onFormSubmit);

// function that are being called when hitting the submit, prevent from reloading the page, and clear the form and the storge when submitting
function onFormSubmit(e) {
  e.preventDefault(); //Prevent reloading the page on form submit
  const email = emailEl.value;
  const message = messageEl.value;

  if (email == '' || message == '') {
    alert('Enter both input parameters!');
    form.reset();
    return;
  }

  const formData = { email, message };
  console.log(formData);
  form.reset();

  localStorage.removeItem(STORAGE_KEY);
}