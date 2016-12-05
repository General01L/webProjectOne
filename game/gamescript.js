function main() {
  $('.container-choosefaction').hide();
  $('.start-button').on('click', function() {;
  $('.jumbotron-start').fadeOut(800);
  $('.container-choosefaction').fadeIn(1600);
 });
}

$(document).ready(main);

function adaptcsssize(width) {
  width = parseInt(width);
  if (width < 1000) {
    $("#size-stylesheet").attr("href", "game/gamecsssmall.css");
  } else if (width < 2200) {
    $("#size-stylesheet").attr("href", "game/gamecss.css");
  } else {
     $("#size-stylesheet").attr("href", "game/gamecsslarge.css"); 
  }
}

$(function() {
  adaptcsssize($(this).width());
  $(window).resize(function() {
    adaptcsssize($(this).width());
  });
});
