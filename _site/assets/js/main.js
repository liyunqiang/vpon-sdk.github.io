$(document).ready(function() {

  // Click hamburger icon to toggle hidden list for mobile users
  $('.open-button').on('click', function(event) {
    $('.hambg-list').toggleClass('come-on');
    $('.hambg-list').toggleClass('go-off');
  })

  $('.open-button').on('click', function(event) {
    $('body').toggleClass('scroll-locked');
  })

  document.getElementById("open-button").addEventListener('click', function(e) {
    document.getElementById('burgericon').classList.toggle('open');
  });

});
