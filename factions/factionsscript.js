function main() {
  $('.row-moreinfo').hide();
  $('.moreinfo-button').on('click', function() {;
  $(this).next().slideToggle(400);
 });
}

$(document).ready(main);
