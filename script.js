function adaptcsssize(width) {
  width = parseInt(width);
  if (width < 800) {
    $("#size-stylesheet").attr("href", "mainsmall.css");
  } else if (width < 2000) {
    $("#size-stylesheet").attr("href", "css/main.css");
  } else {
     $("#size-stylesheet").attr("href", "css/mainlarge.css"); 
  }
}

$(function() {
  adjustStyle($(this).width());
  $(window).resize(function() {
    adjustStyle($(this).width());
  });
});
