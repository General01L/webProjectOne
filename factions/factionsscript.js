function main() {
  //$('.row-moreinfo').hide();
  $('.moreinfo-button').on('click', function() {;
  $(this).next('.row-moreinfo').slideToggle(400);
  $(this).toggleClass('active');
 });
}

$(document).ready(main);
