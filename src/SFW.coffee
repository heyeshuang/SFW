jW=jQuery.noConflict()
fridgeMagnet=
  '''
  <div class="pinned">
    <a id="boxOpen" href="javascript:;">Click Me</a>
  </div>
  '''
configBox=
  '''
  <div id="configBox" class="invisible" >
    <h6>close me</h6>
    <a id="boxClose" href="javascript:;">OK</a>
  </div>
  '''
jW("body").append(fridgeMagnet)
jW("body").append(configBox)
jW("#boxOpen").click ->
  jW.blockUI(
    message:jW("#configBox")
    #setTimeout(jW.unblockUI, 2000)
  )
jW("#boxClose").click ->
  jW.unblockUI()
