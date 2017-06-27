'use strict'
'use bable'

const mainwindow = require('./mainwindow')
const projectKeeper = require('./projectKeeper')
const projectTemplateService = require('./projectTemplateService')
const defaultTemplate = require('./defaultTemplate')
const $ = require('jquery')

module.exports = {
  activate () {
    // regist command
    atom.commands.add(atom.commands.rootNode, 'mainwindow:toggle', this.toggle)
    atom.commands.add(atom.commands.rootNode, 'mainwindow:confirmed', this.confirmed)
    atom.project.onDidChangePaths(this.projectChanged)

    // open introduce window when no project
    let dirs = atom.project.getDirectories() || []

    if (dirs.length === 0) {
      this.toggle()
    } else {
      // projectKeeper.load()
    }
  },

  toggle () {
    mainwindow.activate()
    projectKeeper.load()
      .then(() => projectKeeper.verify())
      .then(() => mainwindow.mySelectListView.setItems(projectKeeper.format()))
  },

  // project select event, e is a event object
  confirmed (e) {
    let p = e.detail.split(',')[1]
    atom.project.addPath(p)

    // hidden mainwindow
    mainwindow.toggle()

    // show main workspace
    $('.workspace').show()
    mainwindow.hidden()
  },

  // record opened projects, projectPaths is a string Array
  projectChanged (projectPaths) {
    // Sometimes we cannot get projectDirectories on activate.
    // So we watch project path changes and hidden start up
    // window, if sth. added project directory.
    if (projectPaths.length !== 0) {
      mainwindow.dismiss()
      $('.workspace').show()
    }
    projectKeeper.add(projectPaths)
    atom.commands.dispatch(atom.commands.rootNode, 'mainwindow:projectChanged')
  },

  consumeProjectTemplate (service) {
    projectTemplateService.regist(service)
  },

  provideProjectTemplate () {
    return defaultTemplate
  }

}
