(function() {
  var cssContainer, cssContent, error;

  cssContent = ' .pinned{\n   padding:3px;\n   line-height:0;\n   opacity:0.7;\n   background: #afb4db;\n   border-radius: 20px;\n   border:0px solid red;\n   position:fixed;\n   left:10px;\n   bottom:10px;\n   }\n\n .invisible{\n   display:none;\n   cursor: default;\n   }\n #configBox{\n   width:320px;\n   }\n\nbutton::-moz-focus-inner{\nborder:0;\npadding:0;\nmargin:0;\n}\n\n.easyDialog_wrapper{\ncolor:#444;\nborder:3px solid rgba(0,0,0,0);\n-webkit-border-radius:5px;\n-moz-border-radius:5px;\nborder-radius:5px;\n-webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);\n-moz-box-shadow:0 0 10px rgba(0,0,0,0.4);\nbox-shadow:0 0 10px rgba(0,0,0,0.4);\ndisplay:none;\nfont-family:"Microsoft yahei", Arial;\n}\n\n.easyDialog_wrapper .easyDialog_content{\n-webkit-border-radius:4px;\n-moz-border-radius:4px;\nborder-radius:4px;\nbackground:#fff;\nborder:1px solid #e5e5e5;\n}\n\n.easyDialog_wrapper .easyDialog_title{\nheight:30px;\nline-height:30px;\noverflow:hidden;\ncolor:#666;\npadding:0 10px;\nfont-size:14px;\nborder-bottom:1px solid #e5e5e5;\nbackground:#f7f7f7;\nborder-radius:4px 4px 0 0;\n}\n\n.easyDialog_wrapper .close_btn{\nfont-family:arial;\nfont-size:18px;\n_font-size:12px;\nfont-weight:700;\ncolor:#999;\ntext-decoration:none;\nfloat:right;\n}\n\n.easyDialog_wrapper .close_btn:hover{\ncolor:#333;\n}\n\n.easyDialog_wrapper .easyDialog_text{\npadding:25px 10px;\nfont-size:13px;\nline-height:22px;\n}\n\n.easyDialog_wrapper .easyDialog_footer{\npadding:0 10px;\n*zoom:1;\n}\n\n.easyDialog_wrapper .easyDialog_footer:after{\ncontent:\'\';\ndisplay:block;\nheight:0;\noverflow:hidden;\nvisibility:hidden;\nclear:both;\n}\n\n.easyDialog_wrapper .btn_highlight,\n.easyDialog_wrapper .btn_normal{\nborder:1px solid;\nborder-radius:2px;\ncursor:pointer;\nfont-family:"Microsoft yahei", Arial;\nfloat:right;\nfont-size:12px;\npadding:0 12px;\nheight:24px;\nline-height:24px;\nmargin-bottom:10px;\n}\n\n.easyDialog_wrapper .btn_highlight{\nbackground:#4787ed;\nbackground:-webkit-gradient(linear,center bottom,center top,from(#4787ed),to(#4d90fe));\nbackground:-moz-linear-gradient(90deg, #4787ed, #4d90fe);\nborder-color:#3079ed;\ncolor:#fff;\n}\n\n.easyDialog_wrapper .btn_normal{\nmargin-left:10px;\nborder-color:#c3c3c3;\nbackground:#ececec;\ncolor:#333;\nbackground:-webkit-gradient(linear,center bottom,center top,from(#ececec),to(#f4f4f4));\nbackground:-moz-linear-gradient(90deg,#ececec,#f4f4f4);\n}\n';

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
  var alarmBox, cancelClock, configBox, dateToWork, divToAppend, fridgeMagnet, img64, longWords, msToCoolDown, msToWork, pulseCount, setClock, startPulse, timeoutAlarm;

  img64 = 'iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB90HFg8CKzDwrf0AAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAAA1VJREFUOMudlE9o22UYxz/P82bJ0jZU1M60TZtDVWbA+ifpiCnSoZYJEw87qAdRmH8OguguguBhpx7Eo0wPXkVhuwkWO3EoNkkbOqW0VdYq2LRdalxobYvNn9/v8ZJJbdox/d5eeJ4P7/v9Pu8jtErS6fSAqo6qagroA44AmNk68KOZTW1vb0/Pzs7utDTvPWQymQjwrIicFZE0UAVKwB+AB3QAx4CamY2b2cVqtZqfmZmptwAHBwfbOzo63lDV182sU0Qu+74/3mg0rppZRVXN87xgMBi8V0SeFpEXzOy653kX6vX6ZzehAYBkMnkkFAq9pKrvAL8BH1Sr1UuFQuHGAZYU4/F4LhaLzYvIm8658865XeAiYA4gHo8/5px718x+9zzvfC6Xu7S2trbDIdrc3GwUi8W5/v7+deAJETne3d19dXV1dV0TiURQVZ8BjpnZhXw+P9H0q8XjffIqlcqXwOfAw4FA4DSgbmBg4CFVPQdc2djY+LBcLlebAfXEYrFTXV1dG6VSaesgYrlc9qLR6JpzLiMiD0Sj0ayq6gkRiQKXFxYWtv9JS6RLVV8Oh8Njw8PDJ5sT0KJCobBoZleA+wOBwCMKHAe2arXa/N7CycnJOTMbAxrAGHAunU7feQDTzGwKaIjIfaqq/Wa2Cfy536NsNpur1+vvmdmkqo465/oONNPzfgX+MrOoNmeuTUQChzypJCITZrbNbUhF5AZwh4jcc1iRiNRuBWne/KiIlNTMrgERVU3yP6WqjwLOzBYVmAV8EXkymUze/V9hqVSqDxgxs8VGo/GDep43aWbfqepT4XD4OcDdLiyRSARDodArInIC+GJ6evpnzefzq77vfwpUgLOZTObUyMhIYF+KdWDH8zx/L6yzs/OMiLwIzJvZOOA7gPb29mI4HBYROS0iQ2YW7unpWV5ZWdkC6O3trTnnrqvqT8vLy7upVKqvra3tLefc20DI87z3c7nc14D9a31FIpHXRORVIGZm35vZN8Bco9FYuZlmM4AREXkcKJrZR+vr6x8vLS1VWz5/MplsC4VCJ4HnRWRURCLADrDbLDkKRMxMgW993/9ERL7KZrNb3GqbDA0N3RUIBNIikhaRB0WkF4gAFd/3rwFTwEQ2m/1lf+/fxPttOfXp2toAAAAASUVORK5CYII=';

  fridgeMagnet = '<div class="pinned">\n  <img id="boxOpen" src="data:image/png;base64,' + img64 + '"></div>';

  alarmBox = '<div id="alarmBox">\n  <div>工作时间到</div>\n  <div>请输入以下文字：</div>\n  <canvas id="captcha" width="400" height="30"></canvas><br>\n  <input type="text" name="captchaIn" id="captchaIn" size="30" style="width:80%;">\n</div>';

  configBox = '<div id="configBox">\n  <div>我就休息\n  <input type="number" name="minuteField" id="minuteField" min="1" size="3"\n  value="1" onkeyup="this.value=this.value.replace(/[^0-9.]/g,\'\')" />\n  分钟</div>\n</div>';

  dateToWork = 0;

  pulseCount = 0;

  msToCoolDown = 1 * 3600 * 1000;

  longWords = ["我荒废的今日，正是昨日殒身之人祈求的明日", "Procrastination", "拖延的基础实际上是对自身不切实际的期望", "the longer you wait the worse it gets", "停止空谈，开始行动"];

  '不要超过20个中文字符\n上面都是我编的，我编不下去了';

  setClock = function() {
    '设置休息时间并开始计时';
    var dateClicking, msToWork, relaxMinutes;
    relaxMinutes = parseFloat(document.getElementById("minuteField").value);
    console.log(relaxMinutes);
    if (isNaN(relaxMinutes)) {
      return false;
    }
    if (relaxMinutes <= 0) {
      return false;
    }
    dateClicking = new Date();
    dateToWork = new Date();
    msToWork = dateClicking.getTime() + relaxMinutes * 60 * 1000;
    dateToWork.setTime(parseInt(msToWork));
    localStorage.setItem("msToWork", msToWork);
    console.log(dateClicking);
    console.log(dateToWork);
    console.log(msToWork);
    startPulse();
    return true;
  };

  startPulse = function() {
    '每秒检测一次，频率可以更低\n我不喜欢轮询……有更好的方法吗？';
    var dateNow;
    clearTimeout(pulseCount);
    dateNow = new Date();
    if (dateNow >= dateToWork) {
      return timeoutAlarm();
    } else {
      return pulseCount = setTimeout(startPulse, 1000);
    }
  };

  cancelClock = function() {
    '干掉pulse，删掉storage';
    clearTimeout(pulseCount);
    localStorage.removeItem("msToWork");
    try {
      easyDialog.close();
    } catch (_error) {}
    return true;
  };

  timeoutAlarm = function() {
    '......';
    var c, cxt, longWord;
    longWord = longWords[Math.floor(Math.random() * longWords.length)];
    setTimeout(cancelClock, msToCoolDown);
    easyDialog.open({
      container: {
        content: alarmBox,
        yesFn: function() {
          if (longWord === document.getElementById("captchaIn").value) {
            return cancelClock();
          } else {
            return false;
          }
        }
      }
    });
    c = document.getElementById("captcha");
    cxt = c.getContext("2d");
    cxt.font = "20px serif";
    cxt.textBaseline = "top";
    return cxt.fillText(longWord, 0, 5, 600);
  };

  divToAppend = document.createElement("div");

  divToAppend.innerHTML = fridgeMagnet;

  document.body.appendChild(divToAppend);

  document.getElementById("boxOpen").onclick = function() {
    return easyDialog.open({
      container: {
        content: configBox,
        yesFn: setClock,
        noFn: true,
        yesText: "真的!",
        noText: "逗你玩"
      }
    });
  };

  '页面间通信';

  window.addEventListener("storage", function(e) {
    console.log(e);
    if (e.key === "msToWork") {
      if (e.newValue != null) {
        dateToWork = new Date();
        dateToWork.setTime(parseInt(e.newValue));
        startPulse();
      } else {
        cancelClock();
      }
    }
  }, false);

  '页面加载时检测';

  if ((msToWork = localStorage.getItem("msToWork")) != null) {
    console.log(msToWork);
    dateToWork = new Date();
    dateToWork.setTime(parseInt(msToWork));
    startPulse();
  }

  /*
  TODO
  # 用GM-keys实现部分跨域
  # 取消已开始的计时
  # 树形菜单设置界面
  # 改变颜色
  # 让图标变得可动！！！
  DONE
  # 多标签状态共享
    # 本地存储
  # 有趣的关闭手段
  */


}).call(this);
