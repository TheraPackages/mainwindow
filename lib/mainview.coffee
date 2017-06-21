{View,TextEditorView} = require "atom-space-pen-views"
$ = window.$ = window.jQuery = require 'jquery'
require './jquery-ui.js'
project = require './project.js'
path = require 'path'

module.exports =
class RightView extends View
  @content: ->
    pathstr = path.join(atom.packages.resolvePackagePath('mainwindow'), 'images')

    $ ->

      runEffect = ->
        # 从中获取特效类型
        selectedEffect = 'clip'
        # 大多数的特效类型默认不需要传递选项
        options = {}
        # 一些特效带有必需的参数
        if selectedEffect == 'scale'
          options = percent: 100
        else if selectedEffect == 'size'
          options = to:
            width: 280
            height: 185
        # 运行特效
        $(document.body.children[0]).show selectedEffect, options, 500, callback
        return

      callback = ->
        $('#mainwindow-head-div').empty()
        $('#mainwindow-head-div').remove()
        $('#mainwindow-head-content').empty()
        $('#mainwindow-head-content').remove()
        $('#mainwindow-head-side').empty()
        $('#mainwindow-head-side').remove()
        $('#mainwindow-head-clear').remove()
        $('#mainwindow-head-clear').remove()
        $('#mainwindow-head-footer').remove()
        $('#mainwindow-head-footer').remove()

        return


      $('#dialog-confirm').dialog
        autoOpen: false
        resizable: false
        modal: true
        height: 400
        width:600
        dialogClass:"dialogDiv"

        show:
          effect:'puff'
          duration:300
        hide:
          effect:'puff'
          duration:300

        buttons:
          'Create': ->

            project.create =>
              document.body.children[0].style.display = ''
              # atom.commands.dispatch(atom.commands.rootNode, 'mainwindow:create', this)

              runEffect()

              $(this).dialog 'close'

            , (err) =>
              $('.main-expanse-div').children().last().text(err.message)
              $('.main-expanse-div').children().first().hide()


            return
          Cancel: ->
            $(this).dialog 'close'
            return
      return

    $(document).ready ->
      $('#previewleftofmain').mousemove (e) ->
        elementWidth = 1
        mousePercent = (e.pageX - (@offsetLeft)) / elementWidth
        bgPosition = 0 - (Math.floor(mousePercent * 0.1 / elementWidth) * elementWidth)
        $(this).css 'background-position', bgPosition + 'px 0px'
        return
      return


    $ ->
      getMoreUrl = 'https://github.com/alibaba/Thera'

      $('#gotoGitBut').click ->
        require('electron').shell.openExternal(getMoreUrl)

      $('#luaViewCreateTab').mouseover ->
        $('#mainrightguideimg').attr('src',pathstr + "/luaviewguide.png")
        getMoreUrl = 'https://github.com/alibaba/LuaViewSDK'
        return

      $('#weeXcreateProject').mouseover ->
        $('#mainrightguideimg').attr('src',pathstr + "/weexguide.png")
        getMoreUrl = 'https://github.com/alibaba/weex'
        return

      $('#virtualViewCreateTab').mouseover ->
        $('#mainrightguideimg').attr('src',pathstr + "/virtualviewguide.png")
        getMoreUrl = 'http://tangram.pingguohe.net/'
        return

      $('#existingProject').mouseover ->

        console.log pathstr + "/reopenProject.png"
        $('#mainrightguideimg').attr('src',pathstr + "/reopenProject.png")
        getMoreUrl = 'https://github.com/alibaba/Thera'

        return

      return



    @div id:"mainwindow-head-side", class:'wrapper-side' ,=>

      @div id:"mainwindow-left" ,=>
        @span class:'logo-div'
        @span 'Thera', class: 'title-div'
        @span "#{atom.getTheraVersion()}",class:'version-div'


        @hr class:'style-eight'
        @div class:'expentios-div',=>
          @span class: 'fa fa-rocket fa-2x expentios-icon-new1'
          @span 'Start a new Thera project for Weex',class:'expentios-sub-span',outlet: 'createProject',click: 'createWeexProject',id:"weeXcreateProject"

        @div class:'expentios-div',=>
          @span id:"mainviewluaviewicon", class: 'lua-icon expentios-icon-lua'
          @span 'Start a new Thera project for LuaView',class:'expentios-sub-span',id: 'luaViewCreateTab',click: 'createLuaProject'

        if atom.packages.resolvePackagePath('virtualview-plugin')
          @div class:'expentios-div',=>
            @span class: 'fa fa-2x fa-space-shuttle expentios-icon-new1'
            @span 'Start a new Thera project for VirtualView',class:'expentios-sub-span',id: 'virtualViewCreateTab',click: 'createVirtualViewProject'

        @div class:'expentios-div',=>
          @span class: 'fa fa-folder-open fa-2x expentios-icon-new2'
          @span 'Open an existing Thera project',class:'expentios-sub-span',id: 'existingProject',click: 'openExistProject'

        @hr class:'style-eight2'

        @div class:'expentios-div',=>
          @span class: 'fa fa-github-alt fa-2x expentios-icon-new3'
          @span 'Check out project from Version Control',class:'expentios-sub-span'

        @div class:'expentios-div',=>
          @span class: 'fa fa-diamond fa-2x expentios-icon-new4'
          @span 'Import project from Falcon-sketch',class:'expentios-sub-span'

        @div class:'main-foot-div' ,=>
          @span class: 'fa fa-cog main-foot-icon'
          @span 'Setting'
          @span class: 'fa fa-exclamation-circle main-foot-icon'
          @span 'Get Help'


      @div id:"mainwindow-right" ,=>

        @img id:"mainrightguideimg" ,class:"main-right-guide-img", src:pathstr + "/updateNode.png"
        @span ' get more',id:"gotoGitBut", class:"spanGetMoreMain fa fa-github fa-2x"
        @div id:"previewleftofmain"

  $ ->
        $("#previewleftofmain").css("height", require('electron').screen.getPrimaryDisplay().size.height)
        $("#previewleftofmain").css("width", require('electron').screen.getPrimaryDisplay().size.width)

  createWeexProject: ->
    $ ->
      $('#dialog-confirm').attr('language', 'weex').dialog 'open'

  createLuaProject: ->
    $ ->
      $('#dialog-confirm').attr('language', 'luaview').dialog 'open'

  createVirtualViewProject: ->
    $ ->
      $('#dialog-confirm').attr('language', 'virtualview').dialog 'open'

  openExistProject: ->

    atom.pickFolder (path) ->
      if (Array.isArray(path))
        document.body.children[0].style.display = ''
        atom.project.addPath(path[0])
        atom.commands.dispatch(atom.commands.rootNode, 'tree-view:show')
