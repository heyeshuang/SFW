fridgeMagnet=
  '''
  <div class="pinned">
    <a id="boxOpen" href="javascript:;">Click Me</a>
  </div>
  '''
alarmBox=
  '''
  <div id="alarmBox">
    <div>time to work babe</div>
  </div>
  '''
configBox=
  '''
  <div id="configBox">
    <div>我就休息
    <input type="number" name="minuteField" id="minuteField" min="1" size="3"
    value="1" onkeyup="this.value=this.value.replace(/[^0-9.]/g,'')" />
    分钟！</div>
  </div>
  '''

dateToWork=0
pulseCount=0
setClock=()->
  '''
  设置休息时间并开始计时
  '''
  relaxMinutes=parseFloat(document.getElementById("minuteField").value)
  console.log(relaxMinutes)
  if isNaN(relaxMinutes)
    return false
  if relaxMinutes<=0.01
    return false
  dateClicking=new Date()
  dateToWork=new Date()
  dateToWork.setTime(dateClicking.getTime()+relaxMinutes*60*1000)
  GM_setValue("gMSToWork",dateToWork.getTime().toString())
  GM_setValue("isOn",true)
  # console.log(parseInt(GM_getValue("gMSToWork")))
  # console.log(dateClicking)
  # console.log(dateToWork.getTime())
  startPulse()
  return true

startPulse=()->
  '''
  每秒检测一次，频率可以更低
  我不喜欢轮询……有更好的方法吗？
  '''
  clearTimeout(startPulse)
  console.log(GM_getValue "isOn")
  if GM_getValue("isOn")
    dateToWork=new Date()
    dateToWork.setTime(parseInt(GM_getValue("gMSToWork")))
    dateNow=new Date()
    if dateNow>=dateToWork
      timeoutAlarm()
    else
      pulseCount=setTimeout(startPulse,1000)
  else
    try
      easyDialog.close()
    pulseCount=setTimeout(startPulse,1000)

timeoutAlarm=()->
  easyDialog.open(
    container:
      content:alarmBox
      yesFn:cancelClock
  )
cancelClock=()->
  GM_setValue("isOn",false)
  startPulse()
  return true


divToAppend=document.createElement("div")
divToAppend.innerHTML=fridgeMagnet
document.body.appendChild(divToAppend)
document.getElementById("boxOpen").onclick=()->
  clearTimeout(pulseCount)
  easyDialog.open(
    container:
      content:configBox
      yesFn:setClock
      noFn:->
        startPulse()
        return true
      yesText:"真的"
  )
startPulse()

###
TODO
# 多标签状态共享
  # 本地存储
  # startPulse开始即运行
# 取消已开始的计时
# 有趣的关闭手段
###
