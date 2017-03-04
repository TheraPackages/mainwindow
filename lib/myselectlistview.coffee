{View} = require 'space-pen'
{SelectListView, $$,$} = require 'atom-space-pen-views'

Array::first ?= (n) ->
  if n? then @[0...(Math.max 0, n)] else @[0]

Array::last ?= (n) ->
  if n? then @[(Math.max @length - n, 0)...] else @[@length - 1]

module.exports =
  class WeSelectListView extends SelectListView
    initialize: ->
     super
     @addClass('sidebar-left')
     @setItems(['HelloProject,/Users/dean/Downloads', 'World,/Users/dean/Downloads/Test/Mocks/Android/dirvices/drivices1/bubugao/vovo/vovo-version-4.3.1','AndroidTest,/Users/dean/Downloads','VOVO_Project,/Users/dean/Downloads','Weex4iOS,/Users/dean/Downloads','Weex4Android,/Users/dean/Downloads','Thera4Version1.0,/Users/dean/Downloads'])
     #@panel ?= atom.workspace.addModalPanel(item: this)
     #@panel.show()
     @focusFilterEditor()
     @filterEditorView.addClass("sub-rightview-filter")
     @textEditor = @filterEditorView.getModel()
     @textEditor.placeholderText = "🔍 Search your project(path) by name"


    @split_arr = null
    viewForItem: (item) ->
      $$ ->
        @li =>
          @div class:"blah",=>
            @p =>
              @span item.split(",").first()
              @span item.split(",").last(), class: 'sub-title-project-span'



    #"<li><div class='blah'><p>#{item}</p></div></li>"

    confirmed: (item) ->
      atom.commands.dispatch(atom.commands.rootNode, 'mainwindow:confirmed', item)
      console.log("#{item} was selected")

    cancelled: ->
      console.log("This view was cancelled")

    getFilterQuery: ->
      @filterEditorView.getText()

    #unfocus will be call it
    cancel: ->
      console.log("canceled")


    deactivate: ->
      @remove()
