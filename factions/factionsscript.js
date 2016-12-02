function main() {
  //$('.row-moreinfo').hide();
  $('.moreinfo-button').on('click', function() {;
  $('.row-moreinfo').slideToggle(400);
 });
}

$(document).ready(main);
