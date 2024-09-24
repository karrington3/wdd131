// Select the theme selector button using document.querySelector
const themeSelector = document.querySelector('#theme-selector');

// Select the body element
const body = document.body;

// Select the logo element (assuming it's the only <img> on the page)
const logo = document.querySelector('img');

// Function to change the theme when the button is clicked
function changeTheme() {
  // Check if the dark class is already applied to the body
  if (body.classList.contains('dark')) {
    // If dark mode is on, remove the 'dark' class
    body.classList.remove('dark');
    
    // Change the button text to 'dark'
    themeSelector.textContent = 'dark';

    // Change the logo back to the blue version
    logo.src = "../image/byui-logo_blue (1).webp"; // Replace with actual path to blue logo
  } else {
    // Otherwise, apply the 'dark' class
    body.classList.add('dark');
    
    // Change the button text to 'light' (indicating the user can switch back to light mode)
    themeSelector.textContent = 'light';

    // Change the logo to the white version
    logo.src = "../image/byui-logo_blue (1).webp"; 
  }
}

// Add an event listener to the theme selector button
themeSelector.addEventListener('click', changeTheme);
