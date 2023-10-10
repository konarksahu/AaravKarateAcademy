// script.js

// Function to update the footer text
function updateFooterText() {
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector('footer p');
    footer.textContent = `© ${currentYear} Aarav Karate Academy. All rights reserved.`;
  }
  
  // Event listener to call the updateFooterText function when the page loads
  window.addEventListener('load', updateFooterText);
  