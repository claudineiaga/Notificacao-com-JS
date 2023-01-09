var initialOpen = true;
var blip = document.querySelector('.blip')
var button = document.querySelector('button');
var notification = document.querySelector('.notification');
var close = document.querySelector('.close');
var image = document.querySelector('.profile-img');
var text = document.querySelector('.text')

function toggleNotification() {
  if (initialOpen) {
    initialOpen = false;
    blip.classList.add('hide')
  }
  
  if (notification.classList.contains('open')) {
    image.classList.toggle('show');
    text.classList.toggle('show');
    
    setTimeout(function() {
      notification.classList.toggle('open');
    }, 50)
  } else {
    notification.classList.toggle('open');

    setTimeout(function() {
      image.classList.toggle('show');
      text.classList.toggle('show');
    }, 150)
  }
}

button.addEventListener('click', toggleNotification);
close.addEventListener('click', toggleNotification);