function main() {
  $('.row-moreinfoorks').hide();
  $('.row-moreinfochaos').hide();
  $('.row-moreinfomarines').hide();
  $('.row-moreinfosisters').hide();
  $('.moreinfoorks-button').hover(
  function(){
  $(this).addClass('active');
  },
  function(){
  $(this).removeClass('active');    
  });
  $('.moreinfochaos-button').hover(
  function(){
  $(this).addClass('active');
  },
  function(){
  $(this).removeClass('active');    
  });
  $('.moreinfomarines-button').hover(
  function(){
  $(this).addClass('active');
  },
  function(){
  $(this).removeClass('active');    
  });
  $('.moreinfosisters-button').hover(
  function(){
  $(this).addClass('active');
  },
  function(){
  $(this).removeClass('active');    
  });
  $('.moreinfoorks-button').on('click', function() {;
  $('.row-moreinfoorks').slideToggle(400);
  $(this).toggleClass('clicked');
 });
  $('.moreinfochaos-button').on('click', function() {;
  $('.row-moreinfochaos').slideToggle(400);
  $(this).toggleClass('clicked');
 });
  $('.moreinfomarines-button').on('click', function() {;
  $('.row-moreinfomarines').slideToggle(400);
  $(this).toggleClass('clicked');
 });
  $('.moreinfosisters-button').on('click', function() {;
  $('.row-moreinfosisters').slideToggle(400);
  $(this).toggleClass('clicked');
 });
}

$(document).ready(main);

function adaptcsssize(width) {
  width = parseInt(width);
  if (width < 1000) {
    $("#size-stylesheet").attr("href", "factions/factionscsssmall.css");
  } else if (width < 2200) {
    $("#size-stylesheet").attr("href", "factions/factionscss.css");
  } else {
     $("#size-stylesheet").attr("href", "factions/factionscsslarge.css"); 
  }
}

$(function() {
  adaptcsssize($(this).width());
  $(window).resize(function() {
    adaptcsssize($(this).width());
  });
});

