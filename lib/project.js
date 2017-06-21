'use babel'
'use strict'

const fsp = require('fs-promise')
const path = require('path')
const fs = require('fs')
const projectTemplateService = require('./projectTemplateService')
const $ = require('jquery')
const PROJECT_NAME_PLACEHOLDER = '${project-name}'

module.exports = (function () {
  // create new project
  function create (success, fail) {
    let name = atom.document.getElementById('textProjectNameInput').value
    let projPath = atom.document.getElementById('folderNameInput').value
    let type = $('#dialog-confirm').attr('language')
    _create(name, projPath, type, success, fail)
  }

  function _create (name, projPath, type, success, fail) {
    type = type || 'weex'
    const resourcePath = projectTemplateService.get(type).templatePath
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
        // Auto config project variable.
        var targetFile = path.join(projPath, 'package.json');
        fs.readFile(targetFile, function(err, data) {
          if (err || !data) {
            console.error(`Auto config ${PROJECT_NAME_PLACEHOLDER} read error:`, err);
            return;
          }
          try {
            var dataStr = data.toString()
            var stream = fs.createWriteStream(targetFile)
            stream.write(dataStr.replace(PROJECT_NAME_PLACEHOLDER, name))
            stream.end()
          } catch (err) {
          }
        });
      })
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
