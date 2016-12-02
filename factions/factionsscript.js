function main() {
  $('.row-moreinfo').hide();
  $('.btn btn-primary').on('click', function() {;
  $('.row-moreinfo').next().slideToggle(400);
 });
}

$(document).ready(main);
