var race = 0;
var wargearOrks = 0;
var wargearChaos = 0;
var wargearMarines = 0;
var wargearSisters = 0;

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

function startscreen() {
  $('.container-choosefaction').hide();
  $('.container-wargearorks').hide();
  $('.container-wargearchaos').hide();
  $('.container-wargearmarines').hide();
  $('.container-wargearsisters').hide();
  $('.start-button').on('click', function() {;
  $('.jumbotron-start').fadeOut(800);
  $('.container-choosefaction').fadeIn(1600);
 });
  chooserace();
}

$(document).ready(startscreen);

function chooserace() {
  $('.chooseorks').on('click', function() {;
  $('.container-choosefaction').fadeOut(800);
  race = 1;
 });
  $('.choosechaos').on('click', function() {;
  $('.container-choosefaction').fadeOut(800);
  race = 2;
 });
  $('.choosemarines').on('click', function() {;
  $('.container-choosefaction').fadeOut(800);
  race = 3;
 });
  $('.choosesisters').on('click', function() {;
  $('.container-choosefaction').fadeOut(800);
  race = 4;
 });
  choosewargear();
}

function wargear() {
  if (race = 1) {
  $('.container-wargearorks').fadeIn(1600);
  $('.choosepk').on('click', function() {;
  $('.container-wargearorks').fadeOut(800);
  wargearOrks = 1;
 });
  $('.choosechoppa').on('click', function() {;
  $('.container-wargearorks').fadeOut(800);
  wargearOrks = 2;
 });
  }
  else if (race = 2) {
  $('.container-wargearchaos').fadeIn(1600);
  $('.choosesword').on('click', function() {;
  $('.container-wargearchaos').fadeOut(800);
  wargearChaos = 1;
 });
  $('.choosesound').on('click', function() {;
  $('.container-wargearchaos').fadeOut(800);
  wargearChaos = 2;
 });
  }
  else if (race = 3) {
  $('.container-wargearmarines').fadeIn(1600);
  $('.choosepowerfist').on('click', function() {;
  $('.container-wargearmarines').fadeOut(800);
  wargearMarines = 1;
 });
  $('.choosechainsword').on('click', function() {;
  $('.container-wargearmarines').fadeOut(800);
  wargearMarines = 2;
 });
  }
  else if (race = 4) {
  $('.container-wargearsisters').fadeIn(1600);
  $('.chooseflamer').on('click', function() {;
  $('.container-wargearsisters').fadeOut(800);
  wargearSisters = 1;
 });
  $('.choosemelta').on('click', function() {;
  $('.container-wargearsisters').fadeOut(800);
  wargearSisters = 2;
 });
  }
  else {
    startscreen();
  }
}

$(document).ready(wargear);
