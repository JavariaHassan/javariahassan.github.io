let elements = document.querySelectorAll('[data-include]');
elements.forEach(element => {
  file = element.dataset.include
  var xhr = new XMLHttpRequest();
  xhr.open('GET', file + '.html', true);
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return; // or whatever error handling you want
    element.innerHTML = this.responseText;
    // console.log(this.responseText)
  };
  xhr.send();
});