var colorButton = document.getElementById('colorChanger');
var colors = ['red', 'blue', 'orange', 'yellow', 'green'];

colorButton.addEventListener('click', function(e) {
  e.preventDefault();
  var randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
})
