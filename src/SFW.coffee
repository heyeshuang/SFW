jW=jQuery.noConflict()
fridgeMagnet=
  '''
  <div class="pinned">
    <a id="boxOpen" href="javascript:;">Click Me</a>
  </div>
  '''
alarmBox=
  '''
  <div id="alarmBox" class="invisible" >
    <h6>time for work babe</h6>
    <a id="boxCloseNG" href="javascript:;">OK</a>
  </div>
  '''
configBox=
  '''
  <div id="configBox" class="invisible" >
    <h6>close me</h6>
    <a id="boxClose" href="javascript:;">OK</a>
    <a id="setClock" href="javascript:;">I wanna work,but not now</a>
  </div>
  '''
jW("body").append(fridgeMagnet)
jW("body").append(alarmBox)
jW("body").append(configBox)

timeForRelax=10 #seconds
pulseClock=0
pulseCount=->
  timeForRelax-=1
  clearTimeout(pulseClock)
  jW("#boxOpen").html(timeForRelax)
  if timeForRelax is 0 #T_T
    timeoutAlarm()
  else
    pulseClock=setTimeout pulseCount,1000

timeoutAlarm=->
  easyDialog.open(
    container: "alarmBox"
  )

jW("#boxOpen").click ->
  easyDialog.open(
    container: "configBox"
  )

jW("#boxClose").click ->
  easyDialog.close()

jW("#setClock").click ->
  pulseCount()
  easyDialog.close()

jW("#boxCloseNG").click ->
  #do nothing
