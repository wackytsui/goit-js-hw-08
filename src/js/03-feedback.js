//import throttle
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
