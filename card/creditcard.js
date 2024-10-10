// Function to check if the card number is valid
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

    const cardNumber = event.target.cardNumber.value;
    const expirationMonth = event.target.querySelector('#expiration-mm').value;
    const expirationYear = `20${event.target.querySelector('#expiration-yy').value}`;
    let errorMsg = '';

    // Clear previous errors
    displayError('');

    // Check if the card number is a valid number
    if (isNaN(cardNumber)) {
        errorMsg += 'Card number is not a valid number<br>';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is not valid<br>';
    }

    // Check if the expiration date is in the future
    if (!isExpirationDateValid(expirationMonth, expirationYear)) {
        errorMsg += 'Expiration date is not valid<br>';
    }

    // If there are errors, display them
    if (errorMsg !== '') {
        displayError(errorMsg);
        return false;
    }

    // If no errors, the form is valid
    return true;
};

// Attach event listener to the form
document.querySelector('#credit-card').addEventListener('submit', submitHandler);
