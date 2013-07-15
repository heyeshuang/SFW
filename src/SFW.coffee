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
    分钟</div>
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
  if relaxMinutes<=0
    return false
  dateClicking=new Date()
  dateToWork=new Date()
  msToWork=dateClicking.getTime()+relaxMinutes*60*1000
  dateToWork.setTime(parseInt(msToWork))
  localStorage.setItem("msToWork",msToWork)
  console.log(dateClicking)
  console.log(dateToWork)
  console.log(msToWork)
  startPulse()
  return true

startPulse=()->
  '''
  每秒检测一次，频率可以更低
  我不喜欢轮询……有更好的方法吗？
  '''
  clearTimeout(pulseCount)
  dateNow=new Date()
  if dateNow>=dateToWork
    timeoutAlarm()
  else
    pulseCount=setTimeout(startPulse,1000)

cancelClock=()->
  '''
  干掉pulse，删掉storage
  '''
  clearTimeout(pulseCount)
  localStorage.removeItem("msToWork")
  try
    easyDialog.close()
  return true

timeoutAlarm=()->
  '''
    ......
  '''
  easyDialog.open(
    container:
      content:alarmBox
      yesFn:cancelClock
  )

divToAppend=document.createElement("div")
divToAppend.innerHTML=fridgeMagnet
document.body.appendChild(divToAppend)
document.getElementById("boxOpen").onclick=()->
  easyDialog.open(
    container:
      content:configBox
      yesFn:setClock
      noFn:true
      yesText:"真的!"
      noText:"逗你玩"
  )
window.addEventListener("storage",
  (e)->
    console.log(e)
    if e.key=="msToWork"
      if e.newValue?
        dateToWork=new Date()
        dateToWork.setTime(parseInt(e.newValue))
        startPulse()
        # console.log(dateToWork.getTime())
      else
        cancelClock()
    return
,false)
'''
页面加载时检测
'''
if (msToWork=localStorage.getItem("msToWork"))?
  console.log(msToWork)
  dateToWork=new Date()
  dateToWork.setTime(parseInt(msToWork))
  startPulse()
# else
  # console.log("nothing here")

###
TODO
# 用GM-keys实现部分跨域
# 取消已开始的计时
# 树形菜单设置界面
# 有趣的关闭手段
DONE
# 多标签状态共享
  # 本地存储
###
