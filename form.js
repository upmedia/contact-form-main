const form = document.querySelector('form');

function validateField(field) {
    const errorElement = field.type === 'radio'
        ? field.closest('fieldset').querySelector('.error-message')
        : field.parentElement.querySelector('.error-message');

    if (!field.validity.valid) {

        errorElement.textContent = field.dataset.error || 'This field is required';
        return false;
    }

    errorElement.textContent = '';
    return true;
}

form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isFormValid = true;

    const fields = form.querySelectorAll('input, textarea');

    fields.forEach(field => {
        const fieldIsValid = validateField(field);

        if (!fieldIsValid) {
            isFormValid = false;
        }
    });

    if (isFormValid) {
        // form.submit();
        console.log('Form is valid, submitting...');

        form.reset();
    } else {
        // go to first error
        // form.querySelector('.error-message:not(:empty)').scrollIntoView({ behavior: 'smooth', block: 'center' });
        form.querySelector(':invalid').focus();
    }

});
