jW=jQuery.noConflict()
CSS='''
  .pinned{
    padding:0 10px;
    line-height:50px;
    opacity:0.7;
    background: #FC6;
    border:1px solid #F90;
    position:fixed;
    left:10px;
    bottom:10px;
    }
  .invisible{
    display:none;
    cursor: default;
    }
  '''
jW("<style>#{CSS}</style>").appendTo('head')
