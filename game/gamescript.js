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
  $('.chaosstoryA1').hide();
  $('.chaosstoryA2').hide();
  $('.chaosstoryA3').hide();
  $('.chaosstoryB1').hide();
  $('.chaosstoryB2').hide();
  $('.chaosstoryB3').hide();
  $('.marinesstoryA1').hide();
  $('.marinesstoryA2').hide();
  $('.marinesstoryA3').hide();
  $('.marinesstoryB1').hide();
  $('.marinesstoryB2').hide();
  $('.marinesstoryB3').hide();
  $('.sistersstoryA1').hide();
  $('.sistersstoryA2').hide();
  $('.sistersstoryA3').hide();
  $('.sistersstoryB1').hide();
  $('.sistersstoryB2').hide();
  $('.sistersstoryB3').hide();
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
  $('.start-button').hover(
  function(){
  $(this).addClass('active');
  },
  function(){
  $(this).removeClass('active');    
  });
  $('.button-end').hover(
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
        $('.button-end').on('click', function() {;
          $('.orkstoryA2').fadeOut(800);
          $('.jumbotron-start').fadeIn(1600);
        });
      });
      $('.selectorkstoryA3').on('click', function() {;
        $('.orkstoryA1').fadeOut(800);
        $('.orkstoryA3').fadeIn(1600);
        $('.button-end').on('click', function() {;
          $('.orkstoryA3').fadeOut(800);
          $('.jumbotron-start').fadeIn(1600);
        });
      });
    });
    $('.choosechoppa').on('click', function() {;
      $('.container-wargearorks').fadeOut(800);
      $('.orkstoryB1').fadeIn(1600);
      $('.selectorkstoryB2').on('click', function() {;
        $('.orkstoryB1').fadeOut(800);
        $('.orkstoryB2').fadeIn(1600);
        $('.button-end').on('click', function() {;
          $('.orkstoryB2').fadeOut(800);
          $('.jumbotron-start').fadeIn(1600);
        });
      });
      $('.selectorkstoryB3').on('click', function() {;
        $('.orkstoryB1').fadeOut(800);
        $('.orkstoryB3').fadeIn(1600);
        $('.button-end').on('click', function() {;
          $('.orkstoryB3').fadeOut(800);
          $('.jumbotron-start').fadeIn(1600);
        });
      });
    });
  });
  $('.choosechaos').on('click', function() {;
    $('.container-choosefaction').fadeOut(800);
    $('.container-wargearchaos').fadeIn(1600);
    $('.choosesword').on('click', function() {;
      $('.container-wargearchaos').fadeOut(800);
      $('.chaosstoryA1').fadeIn(1600);
      $('.selectchaosstoryA2').on('click', function() {;
        $('.chaosstoryA1').fadeOut(800);
        $('.chaosstoryA2').fadeIn(1600);
        $('.button-end').on('click', function() {;
          $('.chaosstoryA2').fadeOut(800);
          $('.jumbotron-start').fadeIn(1600);
        });
      });
      $('.selectchaosstoryA3').on('click', function() {;
        $('.chaosstoryA1').fadeOut(800);
        $('.chaosstoryA3').fadeIn(1600);
        $('.button-end').on('click', function() {;
          $('.chaosstoryA3').fadeOut(800);
          $('.jumbotron-start').fadeIn(1600);
        });
      });
    });
    $('.choosesound').on('click', function() {;
    $('.container-wargearchaos').fadeOut(800);
    $('.chaosstoryB1').fadeIn(1600);
    $('.selectchaosstoryB2').on('click', function() {;
      $('.chaosstoryB1').fadeOut(800);
      $('.chaosstoryB2').fadeIn(1600);
      $('.button-end').on('click', function() {;
          $('.chaosstoryB2').fadeOut(800);
          $('.jumbotron-start').fadeIn(1600);
        });
    });
    $('.selectchaosstoryB3').on('click', function() {;
      $('.chaosstoryB1').fadeOut(800);
      $('.chaosstoryB3').fadeIn(1600);
      $('.button-end').on('click', function() {;
          $('.chaosstoryB3').fadeOut(800);
          $('.jumbotron-start').fadeIn(1600);
        });
      });
    });
  });
  $('.choosemarines').on('click', function() {;
    $('.container-choosefaction').fadeOut(800);
    $('.container-wargearmarines').fadeIn(1600);
      $('.choosefist').on('click', function() {;
        $('.container-wargearmarines').fadeOut(800);
        $('.marinesstoryA1').fadeIn(1600);
        $('.selectmarinesstoryA2').on('click', function() {;
          $('.marinesstoryA1').fadeOut(800);
          $('.marinesstoryA2').fadeIn(1600);
          $('.button-end').on('click', function() {;
            $('.marinesstoryA2').fadeOut(800);
            $('.jumbotron-start').fadeIn(1600);
        });
      });
      $('.selectmarinesstoryA3').on('click', function() {;
        $('.marinesstoryA1').fadeOut(800);
        $('.marinesstoryA3').fadeIn(1600);
        $('.button-end').on('click', function() {;
          $('.marinesstoryA3').fadeOut(800);
          $('.jumbotron-start').fadeIn(1600);
        });
      });
    });
      $('.choosechainsword').on('click', function() {;
        $('.container-wargearmarines').fadeOut(800);
        $('.marinesstoryB1').fadeIn(1600);
        $('.selectmarinesstoryB2').on('click', function() {;
          $('.marinesstoryB1').fadeOut(800);
          $('.marinesstoryB2').fadeIn(1600);
          $('.button-end').on('click', function() {;
            $('.marinesstoryB2').fadeOut(800);
            $('.jumbotron-start').fadeIn(1600);
        });
      });
      $('.selectmarinesstoryB3').on('click', function() {;
        $('.marinesstoryB1').fadeOut(800);
        $('.marinesstoryB3').fadeIn(1600);
        $('.button-end').on('click', function() {;
          $('.marinesstoryB3').fadeOut(800);
          $('.jumbotron-start').fadeIn(1600);
        });
      });
    });
  });
    $('.choosesisters').on('click', function() {;
      $('.container-choosefaction').fadeOut(800);
      $('.container-wargearsisters').fadeIn(1600);
      $('.chooseflamer').on('click', function() {;
        $('.container-wargearsisters').fadeOut(800);
        $('.sistersstoryA1').fadeIn(1600);
        $('.selectsistersstoryA2').on('click', function() {;
          $('.sistersstoryA1').fadeOut(800);
          $('.sistersstoryA2').fadeIn(1600);
          $('.button-end').on('click', function() {;
            $('.sistersstoryA2').fadeOut(800);
            $('.jumbotron-start').fadeIn(1600);
        });
      });
      $('.selectsistersstoryA3').on('click', function() {;
        $('.sistersstoryA1').fadeOut(800);
        $('.sistersstoryA3').fadeIn(1600);
        $('.button-end').on('click', function() {;
          $('.sistersstoryA3').fadeOut(800);
          $('.jumbotron-start').fadeIn(1600);
        });
      });
    });
      $('.choosemelta').on('click', function() {;
        $('.container-wargearsisters').fadeOut(800);
        $('.sistersstoryB1').fadeIn(1600);
        $('.selectsistersstoryB2').on('click', function() {;
          $('.sistersstoryB1').fadeOut(800);
          $('.sistersstoryB2').fadeIn(1600);
          $('.button-end').on('click', function() {;
            $('.sistersstoryB2').fadeOut(800);
            $('.jumbotron-start').fadeIn(1600);
        });
      });
      $('.selectsistersstoryB3').on('click', function() {;
        $('.sistersstoryB1').fadeOut(800);
        $('.sistersstoryB3').fadeIn(1600);
        $('.button-end').on('click', function() {;
          $('.sistersstoryB3').fadeOut(800);
          $('.jumbotron-start').fadeIn(1600);
        });
      });
    });
  });
}

$(document).ready(startscreen);
