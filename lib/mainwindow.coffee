WeSelectListView = require './myselectlistview'
RightView = require './mainview'
$ = window.$ = window.jQuery = require 'jquery'
require './jquery-ui.js'
{View,TextEditorView} = require "atom-space-pen-views"


Array::first ?= (n) ->
  if n? then @[0...(Math.max 0, n)] else @[0]

Array::last ?= (n) ->
  if n? then @[(Math.max @length - n, 0)...] else @[@length - 1]

module.exports =
  mySelectListViewState : null
  rightViewState : null
  activate: (state) ->
    @mySelectListView = @mySelectListView || new WeSelectListView(state)
    @rightView = @rightView || new RightView(state)


    @elementHead = document.createElement('div')
    @elementHead.setAttribute('id','mainwindow-head-div')
    @elementHead.classList.add('wrapper-head')

    @elementContent = document.createElement('div')
    @elementContent.setAttribute('id','mainwindow-head-content')
    @elementContent.classList.add('wrapper-Content')

    @elementinner = document.createElement('div')
    @elementinner.classList.add('wrapper-inner')

    @elementinner.appendChild(atom.views.getView(@mySelectListView))
    @elementContent.appendChild(@elementinner)

    #@elementSide = document.createElement('div')
    #@elementSide.setAttribute('id','mainwindow-head-side')
    #@elementSide.classList.add('wrapper-side')

    @elementClear = document.createElement('div')
    @elementClear.setAttribute('id','mainwindow-head-clear')
    @elementClear.classList.add('wrapper-clear')

    @elementFooter = document.createElement('div')
    @elementFooter.setAttribute('id','mainwindow-head-footer')
    @elementFooter.classList.add('wrapper-Footer')


    @dialogDiv = document.createElement('div')
    @dialogDiv.setAttribute('id','dialog-confirm')
    @dialogDiv.classList.add('dialogDiv')
    @dialogDiv.setAttribute('title','Create Project')

    #************************************************
    @configtitle = document.createElement('p')
    @configtitle.classList.add('validateTips')
    @configtitle.innerText = "Configure your new project"


    @textProjectName_title = document.createElement('label')
    @textProjectName_title.innerText = "Project Name"
    @textProjectName_title.classList.add('mainview-dialog-title')

    @textProjectNameInput = document.createElement('input')
    @textProjectNameInput.setAttribute('id','textProjectNameInput')
    @textProjectNameInput.setAttribute('type','text')
    @textProjectNameInput.classList.add('mainview-dialog-input','native-key-bindings','mod')

    @textDescriptiontName_title = document.createElement('label')
    @textDescriptiontName_title.innerText = "Description"
    @textDescriptiontName_title.classList.add('mainview-dialog-title')

    @textDescriptiontNameInput = document.createElement('input')
    @textDescriptiontNameInput.setAttribute('type','text')
    @textDescriptiontNameInput.classList.add('mainview-dialog-input','native-key-bindings','mod')

    @slipt_line = document.createElement('div')
    @slipt_line.classList.add('slipt_div_line')

    @slipt_line1 = document.createElement('div')
    @slipt_line1.classList.add('slipt_div_line')

    @slipt_line2 = document.createElement('div')
    @slipt_line2.classList.add('slipt_div_line')

    @slipt_line3 = document.createElement('div')
    @slipt_line3.classList.add('slipt_div_line')

    @testCaseCheckName_title = document.createElement('label')
    @testCaseCheckName_title.innerText = "TestCase Support"
    @testCaseCheckName_title.classList.add('mainview-dialog-title')


    @checkBoxTestCase = document.createElement('input')
    @checkBoxTestCase.setAttribute('type','checkbox')
    @checkBoxTestCase.setAttribute('id','checkbox-1')
    @checkBoxTestCase.classList.add('checkbox-custom')

    @labelBoxTestCase = document.createElement('label')
    @labelBoxTestCase.setAttribute('for','checkbox-1')
    @labelBoxTestCase.classList.add('checkbox-custom-label','checkbox-custom-ext')


    @folderName_title = document.createElement('label')
    @folderName_title.innerText = "Project Location "
    @folderName_title.classList.add('mainview-dialog-title')

    @folderNameInput = document.createElement('input')
    @folderNameInput.setAttribute('type','text')
    @folderNameInput.classList.add('mainview-dialog-input','native-key-bindings','mod')
    @folderNameInput.setAttribute('id','folderNameInput')
    @folderNameInput.setAttribute('value',atom.config.get('core.projectHome'))

    @folderNameButton = document.createElement('button')
    @folderNameButton.setAttribute('value','Choose Folder')
    @folderNameButton.innerText = "..."
    @folderNameButton.classList.add('chooseFileButton')


    @mainexpansediv = document.createElement('div')
    @mainexpansediv.classList.add('main-expanse-div')



    # @creatingIcon = document.createElement('li')
    # @creatingIcon.classList.add('fa','fa-spinner','fa-pulse','fa-fw')
    @creatingSpan = document.createElement('span')
    @creatingSpan.classList.add('sr-only')
    @creatingSpan.innerText = "Loading..."
    @expanseSpan = document.createElement('label')
    # @expanseSpan.innerText = 'building...'



    #@checkBoxTestCase.classList.add('demo--radio')

    #@checkBoxTestCase.innerText = "Include TestCase Support"



    document.body.appendChild(@elementHead)
    document.body.appendChild(@elementContent)
    #document.body.appendChild(@elementSide)
    document.body.appendChild(atom.views.getView(@rightView))
    document.body.appendChild(@elementClear)
    document.body.appendChild(@elementFooter)

    @dialogDiv.appendChild(@configtitle)

    @dialogDiv.appendChild(@textProjectName_title)
    @dialogDiv.appendChild(@textProjectNameInput)

    @dialogDiv.appendChild(@slipt_line)

    @dialogDiv.appendChild(@textDescriptiontName_title)
    @dialogDiv.appendChild(@textDescriptiontNameInput)

    @dialogDiv.appendChild(@slipt_line1)

    @dialogDiv.appendChild(@testCaseCheckName_title)
    @dialogDiv.appendChild(@checkBoxTestCase)
    @dialogDiv.appendChild(@labelBoxTestCase)

    @dialogDiv.appendChild(@slipt_line2)
    @dialogDiv.appendChild(@folderName_title)
    @dialogDiv.appendChild(@folderNameInput)
    @dialogDiv.appendChild(@folderNameButton)

    # @mainexpansediv.appendChild(@creatingIcon)
    @mainexpansediv.appendChild(@creatingSpan)
    @mainexpansediv.appendChild(@expanseSpan)

    @dialogDiv.appendChild(@slipt_line3)
    # creating tips div
    @dialogDiv.appendChild(@mainexpansediv)





    #atom.pickFolder (paths) ->
      #console.log paths
      #return


    document.body.appendChild(@dialogDiv)

    #document.body.appendChild(@mySelectListView.getElement())
    #document.body.appendChild(@elementRight)
    $ =>
      $(document.body.children[0]).hide() if @mySelectListView && $(document.body.children[0])
      return

    document.body.style.backgroundColor = 'rgb(' + 21 + ',' + 25 + ',' + 27 + ')'

    @folderNameButton.onclick = (event, element) =>
      atom.pickFolder (paths) ->
        if(paths)
          $('#folderNameInput').attr('value',paths + '/' + $('#textProjectNameInput').val())
        return


    $('#textProjectNameInput').blur ->
      $('#folderNameInput').attr('value',atom.config.get('core.projectHome') + '/' +$('#textProjectNameInput').val())
      return

  deactivate: ->
    @mySelectListView.destroy()
    @rightView.destroy()

  # serialize: ->
  #   mySelectListViewState: @mySelectListView.serialize()
  #   rightViewState: @rightView.serialize()

  dismiss: ->
    @mySelectListView.hide() if @mySelectListView
    @rightView.remove() if @rightView

  hidden: ->
    $("#mainwindow-head-content").css("display", "none")
    $("#mainwindow-head-footer").css("display", "none")

  toggle: ->
    if @mySelectListView.isVisible()
      @mySelectListView.hide()
      @rightView.hide()
    else
      @mySelectListView.show()
      @rightView.show()

    #if @modalPanel.isVisible()
    #  @modalPanel.hide()
    #else
    #  @modalPanel.show()
