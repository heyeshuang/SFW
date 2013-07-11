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
    return jW.blockUI({
      message: jW("#alarmBox")
    });
  };

  jW("#boxOpen").click(function() {
    return jW.blockUI({
      message: jW("#configBox")
    });
  });

  jW("#boxClose").click(function() {
    return jW.unblockUI();
  });

  jW("#setClock").click(function() {
    pulseCount();
    return jW.unblockUI();
  });

  jW("#boxCloseNG").click(function() {});

}).call(this);

(function() {
  var CSS, jW;

  jW = jQuery.noConflict();

  CSS = '.pinned{\n  padding:0 10px;\n  line-height:50px;\n  opacity:0.7;\n  background: #FC6;\n  border:1px solid #F90;\n  position:fixed;\n  left:10px;\n  bottom:10px;\n  }\n.invisible{\n  display:none;\n  cursor: default;\n  }';

  jW("<style>" + CSS + "</style>").appendTo('head');

}).call(this);
