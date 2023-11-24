$(document).ready(function() {

  // menu for small devices
  $('.menu_button').on('click', function(){
    $('.menu_items').toggleClass('hidden');
  });
  $('.menu_items li').click(function(){
    $('.menu_items').addClass('hidden');
  });

});