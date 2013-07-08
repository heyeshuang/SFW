(function() {
  var fridgeMagnet;

  fridgeMagnet = '<div class="pinned">\n  <a href="###">Click Me</a>\n</div>';

  $("body").append(fridgeMagnet);

  $(".pinned").css({
    "padding": "0 10px",
    "line-height": "50px",
    "-moz-opacity": 0.7,
    "opacity": 0.7,
    "background": "#FC6",
    "border": "1px solid #F90",
    "position": "fixed",
    "left": "10px",
    "bottom": "10px"
  });

}).call(this);
