// Function to adjust the text size of found text
function adjustTextSizeOfFoundText() {
  var selectedText = window.getSelection().toString().trim();
  if (selectedText !== '') {
    var foundElements = document.querySelectorAll(':contains(' + selectedText + ')');
    foundElements.forEach(function(element) {
      element.style.fontSize = '18px'; // Adjust the font size as needed
    });
  }
}

// Call the function when the user interacts with your custom search element
document.getElementById('your-search-button').addEventListener('click', function() {
  adjustTextSizeOfFoundText();
});
