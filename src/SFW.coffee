fridgeMagnet=
  '''
  <div class="pinned">
    <a href="###">Click Me</a>
  </div>
  '''
$("body").append(fridgeMagnet)
$(".pinned").css(
  #"width":"100px"
  "padding":"0 10px"
  "line-height":"50px"
  # "filter":"alpha(opacity=12)" #I don't like IE
  "-moz-opacity":0.7
  "opacity":0.7
  "background": "#FC6"
  "border":"1px solid #F90"
  "position":"fixed"
  "left":"10px"
  "bottom":"10px"
)
