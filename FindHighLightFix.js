// Function to apply styles to found text
function applyStylesToFoundText() {
  var selectedText = window.getSelection().toString().trim();
  if (selectedText !== '') {
    var foundElements = document.querySelectorAll(':contains(' + selectedText + ')');
    foundElements.forEach(function(element) {
      element.classList.add('found-text');
    });
  }
}

// Call the function when the user interacts with your custom search element
document.getElementById('your-search-button').addEventListener('click', function() {
  applyStylesToFoundText();
});
