document.addEventListener('find', function(event) {
  var foundText = event.target.toString().trim();
  if (foundText !== '') {
    var foundElements = document.querySelectorAll(':contains(' + foundText + ')');
    foundElements.forEach(function(element) {
      element.classList.add('found-text');
    });
  }
});
