function adaptcsssize(width) {
  width = parseInt(width);
  if (width < 1000) {
    $("#size-stylesheet").attr("href", "mainsmall.css");
  } else if (width < 2200) {
    $("#size-stylesheet").attr("href", "main.css");
  } else {
     $("#size-stylesheet").attr("href", "mainlarge.css"); 
  }
}

$(function() {
  adaptcsssize($(this).width());
  $(window).resize(function() {
    adaptcsssize($(this).width());
  });
});

function videotoggle() {
  $('.container-video').hide();
  $('.infestation-button').on('click', function() {;
  $('.jumbotron').fadeOut(400);
  $('.container-video').fadeIn(800);                                               
 });
  $('.hide-button').on('click', function() {;
  $('.container-video').fadeOut(400);
  $('.jumbotron').fadeIn(800);                                               
 });
}

$(document).ready(videotoggle);
