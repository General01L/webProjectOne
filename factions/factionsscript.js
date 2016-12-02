function main() {
  $('.row-moreinfoorks').hide();
  $('.row-moreinfochaos').hide();
  $('.row-moreinfomarines').hide();
  $('.row-moreinfosisters').hide();
  $('.moreinfoorks-button').on('click', function() {;
  $('.row-moreinfoorks').slideToggle(400);
  $(this).toggleClass('active');
 });
  $('.moreinfochaos-button').on('click', function() {;
  $('.row-moreinfochaos').slideToggle(400);
  $(this).toggleClass('active');
 });
  $('.moreinfomarines-button').on('click', function() {;
  $('.row-moreinfomarines').slideToggle(400);
  $(this).toggleClass('active');
 });
  $('.moreinfosisters-button').on('click', function() {;
  $('.row-moreinfosisters').slideToggle(400);
  $(this).toggleClass('active');
 });
}

$(document).ready(main);
