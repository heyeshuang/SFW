(function() {
  var alarmBox, configBox, divToAppend, fridgeMagnet, pulseClock, timeForRelax;

  fridgeMagnet = '<div class="pinned">\n  <a id="boxOpen" href="javascript:;">Click Me</a>\n</div>';

  alarmBox = '<div id="alarmBox">\n  <h6>time for work babe</h6>\n  <a id="boxCloseNG" href="javascript:;">OK</a>\n</div>';

  configBox = '<div id="configBox">\n  <h6>close me</h6>\n  <a id="boxClose" href="javascript:;">OK</a>\n  <a id="setClock" href="javascript:;">I wanna work,but not now</a>\n</div>';

  divToAppend = document.createElement("div");

  divToAppend.innerHTML = fridgeMagnet;

  document.body.appendChild(divToAppend);

  timeForRelax = 10;

  pulseClock = 0;

  document.getElementById("boxOpen").onclick = function() {
    return easyDialog.open({
      container: {
        header: "hello",
        content: configBox,
        noFn: true
      }
    });
  };

}).call(this);

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
