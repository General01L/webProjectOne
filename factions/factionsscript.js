function main() {
  $('.row-moreinfo').hide();
  $('.moreinfo-button').on('click', function() {;
  //$(this).next().toggle();
  $(this).next().slideToggle(400);
  $(this).toggleClass('active');
 });
}

$(document).ready(main);
