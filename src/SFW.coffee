img64='''
iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB90HFg8CKzDwrf0AAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAAA1VJREFUOMudlE9o22UYxz/P82bJ0jZU1M60TZtDVWbA+ifpiCnSoZYJEw87qAdRmH8OguguguBhpx7Eo0wPXkVhuwkWO3EoNkkbOqW0VdYq2LRdalxobYvNn9/v8ZJJbdox/d5eeJ4P7/v9Pu8jtErS6fSAqo6qagroA44AmNk68KOZTW1vb0/Pzs7utDTvPWQymQjwrIicFZE0UAVKwB+AB3QAx4CamY2b2cVqtZqfmZmptwAHBwfbOzo63lDV182sU0Qu+74/3mg0rppZRVXN87xgMBi8V0SeFpEXzOy653kX6vX6ZzehAYBkMnkkFAq9pKrvAL8BH1Sr1UuFQuHGAZYU4/F4LhaLzYvIm8658865XeAiYA4gHo8/5px718x+9zzvfC6Xu7S2trbDIdrc3GwUi8W5/v7+deAJETne3d19dXV1dV0TiURQVZ8BjpnZhXw+P9H0q8XjffIqlcqXwOfAw4FA4DSgbmBg4CFVPQdc2djY+LBcLlebAfXEYrFTXV1dG6VSaesgYrlc9qLR6JpzLiMiD0Sj0ayq6gkRiQKXFxYWtv9JS6RLVV8Oh8Njw8PDJ5sT0KJCobBoZleA+wOBwCMKHAe2arXa/N7CycnJOTMbAxrAGHAunU7feQDTzGwKaIjIfaqq/Wa2Cfy536NsNpur1+vvmdmkqo465/oONNPzfgX+MrOoNmeuTUQChzypJCITZrbNbUhF5AZwh4jcc1iRiNRuBWne/KiIlNTMrgERVU3yP6WqjwLOzBYVmAV8EXkymUze/V9hqVSqDxgxs8VGo/GDep43aWbfqepT4XD4OcDdLiyRSARDodArInIC+GJ6evpnzefzq77vfwpUgLOZTObUyMhIYF+KdWDH8zx/L6yzs/OMiLwIzJvZOOA7gPb29mI4HBYROS0iQ2YW7unpWV5ZWdkC6O3trTnnrqvqT8vLy7upVKqvra3tLefc20DI87z3c7nc14D9a31FIpHXRORVIGZm35vZN8Bco9FYuZlmM4AREXkcKJrZR+vr6x8vLS1VWz5/MplsC4VCJ4HnRWRURCLADrDbLDkKRMxMgW993/9ERL7KZrNb3GqbDA0N3RUIBNIikhaRB0WkF4gAFd/3rwFTwEQ2m/1lf+/fxPttOfXp2toAAAAASUVORK5CYII=
      '''
fridgeMagnet=
  '''
  <div class="pinned">
    <img id="boxOpen" src="data:image/png;base64,
  '''+img64+'''
"></div>
  '''
alarmBox=
  '''
  <div id="alarmBox">
    <div>工作时间到</div>
    <div>请输入以下文字：</div>
    <canvas id="captcha" width="400" height="30"></canvas><br>
    <input type="text" name="captchaIn" id="captchaIn" size="30" style="width:80%;">
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
msToCoolDown=1*3600*1000
longWords=["我荒废的今日，正是昨日殒身之人祈求的明日",
           "Procrastination",
           "拖延的基础实际上是对自身不切实际的期望",
           "the longer you wait the worse it gets",
           "停止空谈，开始行动"]
'''
不要超过20个中文字符
上面都是我编的，我编不下去了
'''
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
  longWord=longWords[Math.floor(Math.random()*longWords.length)]
  setTimeout(cancelClock,msToCoolDown)
  easyDialog.open(
    container:
      content:alarmBox
      yesFn:()->
        if longWord == document.getElementById("captchaIn").value
          cancelClock()
        else
          return false
  )
  c=document.getElementById("captcha")
  cxt=c.getContext("2d")
  cxt.font = "20px serif"
  cxt.textBaseline="top"
  cxt.fillText(longWord,0,5,600)

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
'''
页面间通信
'''
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
# 改变颜色
# 让图标变得可动！！！
DONE
# 多标签状态共享
  # 本地存储
# 有趣的关闭手段
###
