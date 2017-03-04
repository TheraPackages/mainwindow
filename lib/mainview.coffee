{View,TextEditorView} = require "atom-space-pen-views"
$ = window.$ = window.jQuery = require 'jquery'
require './jquery-ui.js'
project = require './project.js'

module.exports =
class RightView extends View
  @content: ->


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



    @div id:"mainwindow-head-side", class:'wrapper-side' ,=>
      @span class:'logo-div'
      @span 'Thera', class: 'title-div'
      @span "#{atom.getTheraVersion()}",class:'version-div'

      @div class:'expentios-div',=>
        @span class: 'fa fa-rocket fa-2x expentios-icon-new1'
        @span 'Start a new Thera project for Weex',class:'expentios-sub-span',outlet: 'createProject',click: 'createProjectFuction'

      @div class:'expentios-div',=>
        @span class: 'fa fa-folder-open fa-2x expentios-icon-new2'
        @span 'Open an existing Thera project',class:'expentios-sub-span',click: 'openExistProject'

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



  createProjectFuction: ->
    $ ->
      $('#dialog-confirm').dialog 'open'

  openExistProject: ->
    console.log 'openExistProject'
    atom.pickFolder (path) ->
      if (Array.isArray(path))
        document.body.children[0].style.display = ''
        atom.project.addPath(path[0])
        atom.commands.dispatch(atom.commands.rootNode, 'tree-view:show')
