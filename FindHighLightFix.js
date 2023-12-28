// Function to set ::selection styles dynamically
function setSelectionStyles() {
  // Fetch colors from GitHub repository (replace with your actual endpoint)
  fetch('https://raw.githubusercontent.com/MouradAlfadil/FindHighlightFix/main/colors.json')
    .then(response => response.json())
    .then(data => {
      // Apply styles using the fetched colors
      document.styleSheets[0].insertRule(`::selection { background-color: ${data.backgroundColor} !important; color: ${data.textColor}; }`, 0);
    })
    .catch(error => console.error('Error fetching colors:', error));
}

// Call the function when the page loads
window.addEventListener('load', setSelectionStyles);
