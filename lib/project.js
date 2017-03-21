'use babel'
'use strict'

const fsp = require('fs-promise')
const path = require('path')
const projectTemplateService = require('./projectTemplateService')

module.exports = (function () {
  // create new project
  function create (success, fail) {
    let name = atom.document.getElementById('textProjectNameInput').value
    let projPath = atom.document.getElementById('folderNameInput').value
    _create(name, projPath, success, fail)
  }

  function _create (name, projPath, success, fail) {
    const resourcePath = projectTemplateService.get('default').templatePath
    if (!name) {
      console.log(`invalid project name, ${name}`)
      return fail(new Error(`Error: invalid project name ${name}`))
    }
    fsp.ensureDir(projPath)
      .then(() => fsp.ensureDir(path.join(projPath, '.thera')))
      .then(() => fsp.copy(resourcePath, projPath))
      // .then(() => fsp.move(path.join(projPath, 'main.we'),
      //               path.join(projPath, name + '.we'),
      //               {clobber: false}))
      .then(() => {
        if (success) success()
        return new Promise(resolve => {
          atom.project.addPath(projPath)
          atom.commands.dispatch(atom.commands.rootNode, 'tree-view:show')
          resolve()
        })
      })
      .catch(err => new Promise(resolve => {
        if (fail) fail(err)
        console.log(err)
        resolve()
      }))
  }

  return {
    create: create
  }
})()
