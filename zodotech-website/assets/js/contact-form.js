/**
 * ZodoTech - Contact Form Controller
 * Client-side validation, FormSubmit integration, accessible status announcements
 */

import { $ } from './utilities.js';

export function initContactForm() {
  const form = $('#contactForm');
  if (!form) return;

  const submitBtn = $('#submitBtn');
  const alertSuccess = $('#formAlertSuccess');
  const alertError = $('#formAlertError');
  const errorText = $('#formAlertErrorText');

  // Input fields
  const nameInput = $('#fullName');
  const emailInput = $('#email');
  const subjectInput = $('#subject');
  const messageInput = $('#message');
  const consentInput = $('#consent');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Real-time input clear error state
  [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
    if (!field) return;
    field.addEventListener('input', () => {
      field.classList.remove('error');
      const errEl = $(`#${field.id}Error`);
      if (errEl) errEl.classList.remove('active');
      if (alertError) alertError.classList.remove('active');
    });
  });

  const validateField = (field, condition, message) => {
    if (!field) return true;
    const errEl = $(`#${field.id}Error`);
    if (!condition) {
      field.classList.add('error');
      if (errEl) {
        errEl.textContent = message;
        errEl.classList.add('active');
      }
      return false;
    } else {
      field.classList.remove('error');
      if (errEl) errEl.classList.remove('active');
      return true;
    }
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Reset alert statuses
    if (alertSuccess) alertSuccess.classList.remove('active');
    if (alertError) alertError.classList.remove('active');

    // Validate fields
    const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your full name (minimum 2 characters).');
    const isEmailValid = validateField(emailInput, emailRegex.test(emailInput.value.trim()), 'Please enter a valid business email address.');
    const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length >= 3, 'Please provide a project subject.');
    const isMessageValid = validateField(messageInput, messageInput.value.trim().length >= 10, 'Please describe your project or requirements (at least 10 characters).');
    
    let isConsentValid = true;
    if (consentInput) {
      const consentErr = $('#consentError');
      if (!consentInput.checked) {
        isConsentValid = false;
        if (consentErr) consentErr.classList.add('active');
      } else {
        if (consentErr) consentErr.classList.remove('active');
      }
    }

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid || !isConsentValid) {
      const firstInvalid = form.querySelector('.error');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Set loading state
    if (submitBtn) {
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
    }

    try {
      const formData = new FormData(form);
      const actionUrl = form.getAttribute('action') || 'https://formsubmit.co/ajax/odoodeveloper10@gmail.com';
      
      // Perform AJAX submission to FormSubmit
      const response = await fetch(actionUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success
        form.reset();
        if (alertSuccess) {
          alertSuccess.classList.add('active');
          alertSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } else {
        throw new Error(`Submission server returned status ${response.status}`);
      }
    } catch (err) {
      console.warn('Form submission error, attempting native fallback:', err);
      // Fallback: if AJAX is blocked by CORS/network, notify user and provide alternative direct email option
      if (alertError) {
        if (errorText) {
          errorText.textContent = 'Submission encountered a network issue. You can email us directly at odoodeveloper10@gmail.com.';
        }
        alertError.classList.add('active');
        alertError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } finally {
      if (submitBtn) {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
      }
    }
  });
}
