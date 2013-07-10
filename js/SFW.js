(function() {
  var configBox, fridgeMagnet, jW;

  jW = jQuery.noConflict();

  fridgeMagnet = '<div class="pinned">\n  <a id="boxOpen" href="javascript:;">Click Me</a>\n</div>';

  configBox = '<div id="configBox" class="invisible" >\n  <h6>close me</h6>\n  <a id="boxClose" href="javascript:;">OK</a>\n</div>';

  jW("body").append(fridgeMagnet);

  jW("body").append(configBox);

  jW("#boxOpen").click(function() {
    return jW.blockUI({
      message: jW("#configBox")
    });
  });

  jW("#boxClose").click(function() {
    return jW.unblockUI();
  });

}).call(this);

(function() {
  var CSS, jW;

  jW = jQuery.noConflict();

  CSS = '.pinned{\n  padding:0 10px;\n  line-height:50px;\n  opacity:0.7;\n  background: #FC6;\n  border:1px solid #F90;\n  position:fixed;\n  left:10px;\n  bottom:10px;\n  }\n.invisible{\n  display:none;\n  cursor: default;\n  }';

  jW("<style>" + CSS + "</style>").appendTo('head');

}).call(this);
