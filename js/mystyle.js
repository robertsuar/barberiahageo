$(document).ready(function() {

  // Personaliza el control deslizante personalizado del sidebar
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  // Cuando se hace clic en el botón de cerrar o en cualquier elemento con la clase "overlay",
  // elimina la clase "active" de todos los elementos con la clase "overlay"
  $('#dismiss, .overlay').on('click', function() {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
    $('.overlay').css('display', 'none');
  });

  // Cuando se hace clic en el botón de colapsar el sidebar,
  // agrega la clase "active" a todos los elementos con la clase "overlay"
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

});


document.querySelector('.cookie-consent').addEventListener('click', function(e) {
  if (e.target.classList.contains('allow-button')) {
    document.querySelector('.cookie-consent').style.display = 'none';
  }
});