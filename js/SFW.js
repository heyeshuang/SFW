(function() {
  var alarmBox, configBox, fridgeMagnet, jW, pulseClock, pulseCount, timeForRelax, timeoutAlarm;

  jW = jQuery.noConflict();

  fridgeMagnet = '<div class="pinned">\n  <a id="boxOpen" href="javascript:;">Click Me</a>\n</div>';

  alarmBox = '<div id="alarmBox" class="invisible" >\n  <h6>time for work babe</h6>\n  <a id="boxCloseNG" href="javascript:;">OK</a>\n</div>';

  configBox = '<div id="configBox" class="invisible" >\n  <h6>close me</h6>\n  <a id="boxClose" href="javascript:;">OK</a>\n  <a id="setClock" href="javascript:;">I wanna work,but not now</a>\n</div>';

  jW("body").append(fridgeMagnet);

  jW("body").append(alarmBox);

  jW("body").append(configBox);

  timeForRelax = 10;

  pulseClock = 0;

  pulseCount = function() {
    timeForRelax -= 1;
    clearTimeout(pulseClock);
    jW("#boxOpen").html(timeForRelax);
    if (timeForRelax === 0) {
      return timeoutAlarm();
    } else {
      return pulseClock = setTimeout(pulseCount, 1000);
    }
  };

  timeoutAlarm = function() {
    return easyDialog.open({
      container: "alarmBox"
    });
  };

  jW("#boxOpen").click(function() {
    return easyDialog.open({
      container: "configBox"
    });
  });

  jW("#boxClose").click(function() {
    return easyDialog.close();
  });

  jW("#setClock").click(function() {
    pulseCount();
    return easyDialog.close();
  });

  jW("#boxCloseNG").click(function() {});

}).call(this);

(function() {
  var CSS, jW;

  jW = jQuery.noConflict();

  CSS = '.pinned{\n  padding:0 10px;\n  line-height:50px;\n  opacity:0.7;\n  background: #FC6;\n  border:1px solid #F90;\n  position:fixed;\n  left:10px;\n  bottom:10px;\n  }\n.invisible{\n  display:none;\n  cursor: default;\n  }\nbutton::-moz-focus-inner{ border:0; padding:0; margin:0; }\n\n.easyDialog_wrapper{ width:320px; color:#444; border:3px solid rgba(0,0,0,0); -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; -webkit-box-shadow:0 0 10px rgba(0,0,0,0.4); -moz-box-shadow:0 0 10px rgba(0,0,0,0.4); box-shadow:0 0 10px rgba(0,0,0,0.4); display:none; font-family:"Microsoft yahei", Arial; }\n\n.easyDialog_wrapper .easyDialog_content{ -webkit-border-radius:4px; -moz-border-radius:4px; border-radius:4px; background:#fff; border:1px solid #e5e5e5; }\n\n.easyDialog_wrapper .easyDialog_title{ height:30px; line-height:30px; overflow:hidden; color:#666; padding:0 10px; font-size:14px; border-bottom:1px solid #e5e5e5; background:#f7f7f7; border-radius:4px 4px 0 0; }\n\n.easyDialog_wrapper .close_btn{ font-family:arial; font-size:18px; _font-size:12px; font-weight:700; color:#999; text-decoration:none; float:right; }\n\n.easyDialog_wrapper .close_btn:hover{ color:#333; }\n\n.easyDialog_wrapper .easyDialog_text{ padding:25px 10px; font-size:13px; line-height:22px; }\n\n.easyDialog_wrapper .easyDialog_footer{ padding:0 10px; *zoom:1; }\n\n.easyDialog_wrapper .easyDialog_footer:after{ content:\'\'; display:block; height:0; overflow:hidden; visibility:hidden; clear:both; }\n\n.easyDialog_wrapper .btn_highlight,\n.easyDialog_wrapper .btn_normal{ border:1px solid; border-radius:2px; cursor:pointer; font-family:"Microsoft yahei", Arial; float:right; font-size:12px; padding:0 12px; height:24px; line-height:24px; margin-bottom:10px; }\n\n.easyDialog_wrapper .btn_highlight{ background:#4787ed; background:-webkit-gradient(linear,center bottom,center top,from(#4787ed),to(#4d90fe)); background:-moz-linear-gradient(90deg, #4787ed, #4d90fe); border-color:#3079ed; color:#fff; }\n\n.easyDialog_wrapper .btn_normal{ margin-left:10px; border-color:#c3c3c3; background:#ececec; color:#333; background:-webkit-gradient(linear,center bottom,center top,from(#ececec),to(#f4f4f4)); background:-moz-linear-gradient(90deg,#ececec,#f4f4f4); }\n';

  jW("<style>" + CSS + "</style>").appendTo('head');

}).call(this);
