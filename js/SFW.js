(function() {
  var cssContainer, cssContent, error;

  cssContent = ' .pinned{\n\n   padding:0 10px;\n\n   line-height:50px;\n\n   opacity:0.7;\n\n   background: #FC6;\n\n   border:1px solid #F90;\n\n   position:fixed;\n\n   left:10px;\n\n   bottom:10px;\n\n   }\n .invisible{\n\n   display:none;\n\n   cursor: default;\n\n   }\nbutton::-moz-focus-inner{\nborder:0;\npadding:0;\nmargin:0;\n}\n\n.easyDialog_wrapper{\nwidth:320px;\ncolor:#444;\nborder:3px solid rgba(0,0,0,0);\n-webkit-border-radius:5px;\n-moz-border-radius:5px;\nborder-radius:5px;\n-webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);\n-moz-box-shadow:0 0 10px rgba(0,0,0,0.4);\nbox-shadow:0 0 10px rgba(0,0,0,0.4);\ndisplay:none;\nfont-family:"Microsoft yahei", Arial;\n}\n\n.easyDialog_wrapper .easyDialog_content{\n-webkit-border-radius:4px;\n-moz-border-radius:4px;\nborder-radius:4px;\nbackground:#fff;\nborder:1px solid #e5e5e5;\n}\n\n.easyDialog_wrapper .easyDialog_title{\nheight:30px;\nline-height:30px;\noverflow:hidden;\ncolor:#666;\npadding:0 10px;\nfont-size:14px;\nborder-bottom:1px solid #e5e5e5;\nbackground:#f7f7f7;\nborder-radius:4px 4px 0 0;\n}\n\n.easyDialog_wrapper .close_btn{\nfont-family:arial;\nfont-size:18px;\n_font-size:12px;\nfont-weight:700;\ncolor:#999;\ntext-decoration:none;\nfloat:right;\n}\n\n.easyDialog_wrapper .close_btn:hover{\ncolor:#333;\n}\n\n.easyDialog_wrapper .easyDialog_text{\npadding:25px 10px;\nfont-size:13px;\nline-height:22px;\n}\n\n.easyDialog_wrapper .easyDialog_footer{\npadding:0 10px;\n*zoom:1;\n}\n\n.easyDialog_wrapper .easyDialog_footer:after{\ncontent:\'\';\ndisplay:block;\nheight:0;\noverflow:hidden;\nvisibility:hidden;\nclear:both;\n}\n\n.easyDialog_wrapper .btn_highlight,\n.easyDialog_wrapper .btn_normal{\nborder:1px solid;\nborder-radius:2px;\ncursor:pointer;\nfont-family:"Microsoft yahei", Arial;\nfloat:right;\nfont-size:12px;\npadding:0 12px;\nheight:24px;\nline-height:24px;\nmargin-bottom:10px;\n}\n\n.easyDialog_wrapper .btn_highlight{\nbackground:#4787ed;\nbackground:-webkit-gradient(linear,center bottom,center top,from(#4787ed),to(#4d90fe));\nbackground:-moz-linear-gradient(90deg, #4787ed, #4d90fe);\nborder-color:#3079ed;\ncolor:#fff;\n}\n\n.easyDialog_wrapper .btn_normal{\nmargin-left:10px;\nborder-color:#c3c3c3;\nbackground:#ececec;\ncolor:#333;\nbackground:-webkit-gradient(linear,center bottom,center top,from(#ececec),to(#f4f4f4));\nbackground:-moz-linear-gradient(90deg,#ececec,#f4f4f4);\n}\n';

  cssContainer = document.createElement("style");

  cssContainer.type = "text/css";

  cssContainer.textContent = cssContent;

  try {
    document.getElementsByTagName("head")[0].appendChild(cssContainer);
  } catch (_error) {
    error = _error;
    console.log(error);
  }

}).call(this);

(function() {
  var alarmBox, cancelClock, configBox, dateToWork, divToAppend, fridgeMagnet, pulseCount, setClock, startPulse, timeoutAlarm;

  fridgeMagnet = '<div class="pinned">\n  <a id="boxOpen" href="javascript:;">Click Me</a>\n</div>';

  alarmBox = '<div id="alarmBox">\n  <div>time to work babe</div>\n</div>';

  configBox = '<div id="configBox">\n  <div>我就休息\n  <input type="number" name="minuteField" id="minuteField" min="1" size="3"\n  value="1" onkeyup="this.value=this.value.replace(/[^0-9.]/g,\'\')" />\n  分钟！</div>\n</div>';

  dateToWork = 0;

  pulseCount = 0;

  setClock = function() {
    '设置休息时间并开始计时';
    var dateClicking, relaxMinutes;
    relaxMinutes = parseFloat(document.getElementById("minuteField").value);
    console.log(relaxMinutes);
    if (isNaN(relaxMinutes)) {
      return false;
    }
    if (relaxMinutes <= 0.01) {
      return false;
    }
    dateClicking = new Date();
    dateToWork = new Date();
    dateToWork.setTime(dateClicking.getTime() + relaxMinutes * 60 * 1000);
    GM_setValue("gMSToWork", dateToWork.getTime().toString());
    GM_setValue("isOn", true);
    startPulse();
    return true;
  };

  startPulse = function() {
    '每秒检测一次，频率可以更低\n我不喜欢轮询……有更好的方法吗？';
    var dateNow;
    clearTimeout(startPulse);
    console.log(GM_getValue("isOn"));
    if (GM_getValue("isOn")) {
      dateToWork = new Date();
      dateToWork.setTime(parseInt(GM_getValue("gMSToWork")));
      dateNow = new Date();
      if (dateNow >= dateToWork) {
        return timeoutAlarm();
      } else {
        return pulseCount = setTimeout(startPulse, 1000);
      }
    } else {
      try {
        easyDialog.close();
      } catch (_error) {}
      return pulseCount = setTimeout(startPulse, 1000);
    }
  };

  timeoutAlarm = function() {
    return easyDialog.open({
      container: {
        content: alarmBox,
        yesFn: cancelClock
      }
    });
  };

  cancelClock = function() {
    GM_setValue("isOn", false);
    startPulse();
    return true;
  };

  divToAppend = document.createElement("div");

  divToAppend.innerHTML = fridgeMagnet;

  document.body.appendChild(divToAppend);

  document.getElementById("boxOpen").onclick = function() {
    clearTimeout(pulseCount);
    return easyDialog.open({
      container: {
        content: configBox,
        yesFn: setClock,
        noFn: function() {
          startPulse();
          return true;
        },
        yesText: "真的"
      }
    });
  };

  startPulse();

  /*
  TODO
  # 多标签状态共享
    # 本地存储
    # startPulse开始即运行
  # 取消已开始的计时
  # 有趣的关闭手段
  */


}).call(this);
