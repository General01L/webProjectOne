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
  $('.orkstoryA1').hide();
  $('.orkstoryA2').hide();
  $('.orkstoryA3').hide();
  $('.orkstoryB1').hide();
  $('.orkstoryB2').hide();
  $('.orkstoryB3').hide();
  $('.start-button').on('click', function() {;
    $('.jumbotron-start').fadeOut(800);
    $('.container-choosefaction').fadeIn(1600);
 });
  $('.col-sm-6').hover(
  function(){
  $(this).addClass('active');
  },
  function(){
  $(this).removeClass('active');    
  });
  $('.chooseorks').on('click', function() {;
    $('.container-choosefaction').fadeOut(800);
    $('.container-wargearorks').fadeIn(1600);
    $('.choosepk').on('click', function() {;
      $('.container-wargearorks').fadeOut(800);
      $('.orkstoryA1').fadeIn(1600);
      $('.selectorkstoryA2').on('click', function() {;
        $('.orkstoryA1').fadeOut(800);
        $('.orkstoryA2').fadeIn(1600);
      });
      $('.selectorkstoryA3').on('click', function() {;
        $('.orkstoryA1').fadeOut(800);
        $('.orkstoryA3').fadeIn(1600);
      });
    });
    $('.choosechoppa').on('click', function() {;
      $('.container-wargearorks').fadeOut(800);
      $('.orkstoryB1').fadeIn(1600);
      $('.selectorkstoryB2').on('click', function() {;
        $('.orkstoryB1').fadeOut(800);
        $('.orkstoryB2').fadeIn(1600);
      });
    });
  });
  $('.choosechaos').on('click', function() {;
    $('.container-choosefaction').fadeOut(800);
    $('.container-wargearchaos').fadeIn(1600);
    $('.choosesword').on('click', function() {;
      $('.container-wargearchaos').fadeOut(800);
    });
    $('.choosesound').on('click', function() {;
    $('.container-wargearchaos').fadeOut(800);
  });
});
  $('.choosemarines').on('click', function() {;
    $('.container-choosefaction').fadeOut(800);
    $('.container-wargearmarines').fadeIn(1600);
      $('.choosepowerfist').on('click', function() {;
        $('.container-wargearmarines').fadeOut(800);
      });
      $('.choosechainsword').on('click', function() {;
        $('.container-wargearmarines').fadeOut(800);
      });
    });
    $('.choosesisters').on('click', function() {;
      $('.container-choosefaction').fadeOut(800);
      $('.container-wargearsisters').fadeIn(1600);
      $('.chooseflamer').on('click', function() {;
        $('.container-wargearsisters').fadeOut(800);
      });
      $('.choosemelta').on('click', function() {;
        $('.container-wargearsisters').fadeOut(800);
      });
    });
   }

$(document).ready(startscreen);
