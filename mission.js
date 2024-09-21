// Select the theme selector dropdown using document.querySelector
const themeSelector = document.querySelector('#theme-selector');

function changeTheme() {
  // Get the current value of the theme selector
  const selectedTheme = themeSelector.value;

  // Select the body element
  const body = document.body;
  
  // Select the logo element (assuming it's the only <img> on the page)
  const logo = document.querySelector('img');
  
  // If the selected theme is 'dark'
  if (selectedTheme === 'dark') {
    // Add the 'dark' class to the body
    body.classList.add('dark');
    
    // Change the logo to the white version
    logo.src = 'path_to_white_logo.png'; // Replace with actual path to white logo
  } else {
    // Otherwise, remove the 'dark' class from the body
    body.classList.remove('dark');
    
    // Change the logo to the blue version
    logo.src = 'path_to_blue_logo.png'; // Replace with actual path to blue logo
  }
}

// Add an event listener to the theme selector
themeSelector.addEventListener('change', changeTheme);
