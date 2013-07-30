cssContent='''
  .pinned{
    padding:3px;
    line-height:0;
    opacity:0.7;
    background: #afb4db;
    border-radius: 20px;
    border:0px solid red;
    position:fixed;
    left:10px;
    bottom:10px;
    }

  .invisible{
    display:none;
    cursor: default;
    }
  #configBox{
    width:320px;
    }

button::-moz-focus-inner{
 border:0;
 padding:0;
 margin:0;
 }

.easyDialog_wrapper{
 color:#444;
 border:3px solid rgba(0,0,0,0);
 -webkit-border-radius:5px;
 -moz-border-radius:5px;
 border-radius:5px;
 -webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);
 -moz-box-shadow:0 0 10px rgba(0,0,0,0.4);
 box-shadow:0 0 10px rgba(0,0,0,0.4);
 display:none;
 font-family:"Microsoft yahei", Arial;
 }

.easyDialog_wrapper .easyDialog_content{
 -webkit-border-radius:4px;
 -moz-border-radius:4px;
 border-radius:4px;
 background:#fff;
 border:1px solid #e5e5e5;
 }

.easyDialog_wrapper .easyDialog_title{
 height:30px;
 line-height:30px;
 overflow:hidden;
 color:#666;
 padding:0 10px;
 font-size:14px;
 border-bottom:1px solid #e5e5e5;
 background:#f7f7f7;
 border-radius:4px 4px 0 0;
 }

.easyDialog_wrapper .close_btn{
 font-family:arial;
 font-size:18px;
 _font-size:12px;
 font-weight:700;
 color:#999;
 text-decoration:none;
 float:right;
 }

.easyDialog_wrapper .close_btn:hover{
 color:#333;
 }

.easyDialog_wrapper .easyDialog_text{
 padding:25px 10px;
 font-size:13px;
 line-height:22px;
 }

.easyDialog_wrapper .easyDialog_footer{
 padding:0 10px;
 *zoom:1;
 }

.easyDialog_wrapper .easyDialog_footer:after{
 content:'';
 display:block;
 height:0;
 overflow:hidden;
 visibility:hidden;
 clear:both;
 }

.easyDialog_wrapper .btn_highlight,
.easyDialog_wrapper .btn_normal{
 border:1px solid;
 border-radius:2px;
 cursor:pointer;
 font-family:"Microsoft yahei", Arial;
 float:right;
 font-size:12px;
 padding:0 12px;
 height:24px;
 line-height:24px;
 margin-bottom:10px;
 }

.easyDialog_wrapper .btn_highlight{
 background:#4787ed;
 background:-webkit-gradient(linear,center bottom,center top,from(#4787ed),to(#4d90fe));
 background:-moz-linear-gradient(90deg, #4787ed, #4d90fe);
 border-color:#3079ed;
 color:#fff;
 }

.easyDialog_wrapper .btn_normal{
 margin-left:10px;
 border-color:#c3c3c3;
 background:#ececec;
 color:#333;
 background:-webkit-gradient(linear,center bottom,center top,from(#ececec),to(#f4f4f4));
 background:-moz-linear-gradient(90deg,#ececec,#f4f4f4);
 }

  '''
cssContainer=document.createElement("style")
cssContainer.type="text/css"
cssContainer.textContent=cssContent
try
  document.getElementsByTagName("head")[0].appendChild(cssContainer)
catch error
  console.log(error)
