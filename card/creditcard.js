// Function to check if the card number is valid (dummy validation)
const isCardNumberValid = number => number === '1234123412341234';

// Function to display error messages
const displayError = msg => {
    document.querySelector('.errorMsg').innerHTML = msg;
};

// Function to check if the expiration date is valid
const isExpirationDateValid = (month, year) => {
    const currentDate = new Date();
    const expirationDate = new Date(year, month - 1); // Month is 0-indexed
    return expirationDate > currentDate;
};

// Function to handle form submission
const submitHandler = event => {
    event.preventDefault();

    const cardNumber = event.target.cardNumber.value.replace(/\s+/g, ''); // Remove spaces
    const expirationMonth = event.target.expirationMM.value;
    const expirationYear = `20${event.target.expirationYY.value}`;
    let errorMsg = '';

    // Clear previous errors
    displayError('');

    // Validate card number
    if (isNaN(cardNumber) || cardNumber.length !== 16) {
        errorMsg += 'Card number is not valid<br>';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is incorrect<br>';
    }

    // Validate expiration date
    if (!isExpirationDateValid(expirationMonth, expirationYear)) {
        errorMsg += 'Expiration date is not valid<br>';
    }

    // If there are errors, display them
    if (errorMsg !== '') {
        displayError(errorMsg);
        return false;
    }

    // If no errors, form is valid
    alert("Payment successful!");
    return true;
};

// Attach event listener to the form
document.querySelector('#credit-card').addEventListener('submit', submitHandler);
