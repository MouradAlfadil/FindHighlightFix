document.addEventListener('mouseup', function() {
  var selectedText = window.getSelection().toString().trim();
  if (selectedText !== '') {
    var foundElements = document.querySelectorAll(':contains(' + selectedText + ')');
    foundElements.forEach(function(element) {
      element.classList.add('found-text');
    });
  }
});