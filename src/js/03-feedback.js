//import throttle
// import throttle from "lodash.throttle";

// document.addEventListener('DOMContentLoaded', function () {
//   const feedbackForm = document.querySelector('.feedback-form');

  // Function to update local storage with throttling
  // const updateLocalStorage = throttle(() => {
  //   const formState = {
  //     email: feedbackForm.elements['email'].value,
  //     message: feedbackForm.elements['message'].value,
  //   };

  //   localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  // }, 500);

  // Function to load form state from local storage
  // const loadFormState = () => {
  //   const storedState = localStorage.getItem('feedback-form-state');

  //   if (storedState) {
  //     const { email, message } = JSON.parse(storedState);
  //     feedbackForm.elements['email'].value = email;
  //     feedbackForm.elements['message'].value = message;
  //   }
  // };

  // Function to handle form submission
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const formState = {
  //     email: feedbackForm.elements['email'].value,
  //     message: feedbackForm.elements['message'].value,
  //   };

    // Clear local storage and form fields
    // localStorage.removeItem('feedback-form-state');
    // feedbackForm.reset();

    // Display form state in console
  //   console.log('Form State:', formState);
  // };

  // Attach event listeners
  // feedbackForm.addEventListener('input', updateLocalStorage);
  // feedbackForm.addEventListener('submit', handleSubmit);

  // Load form state on page load
//   loadFormState();
// });


// sir emerson

// import throttle from 'lodash.throttle';

// const form = document.querySelector('form.feedback-form');
// const emailEl = document.querySelector('label [name="email"]');
// const messageEl = document.querySelector('label [name="message"]');

// const STORAGE_KEY = 'feedback-form-state';

// form.addEventListener('input', throttle(onFormInput, 500));

// function onFormInput() {
//   const email = emailEl.value;
//   const message = messageEl.value;

//   const formData = {
//     email,
//     message,
//   };

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// onPageReload();

// function onPageReload() {
//   const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)); // "{email, message}"
//   if (savedMessage) {
//     emailEl.value = savedMessage.email;
//     messageEl.value = savedMessage.message;
//   }
// }

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault(); //Prevent reloading the page on form submit
//   const email = emailEl.value;
//   const message = messageEl.value;

//   if (email == '' || message == '') {
//     alert('Enter both input parameters!');
//     form.reset();
//     return;
//   }

//   const formData = { email, message };
//   console.log(formData);
//   form.reset();

//   localStorage.removeItem(STORAGE_KEY);
// }