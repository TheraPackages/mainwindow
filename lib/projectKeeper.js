'use strict'
'use babel'

const path = require('path')
const fsp = require('fs-promise')
const fs = require('fs')

const logPath = path.join(atom.configDirPath, 'log', 'mainwindow.log')
let logger = require('logat')

module.exports = (function () {
  const keeperPath = path.join(atom.configDirPath, 'storage', 'projects.json')
  console.log(`project config path: ${keeperPath}`)

  /*
   * {
   *    name: 'awesomeProject',
   *    path: '/path/to/my/project'
   * }
  */
  var projects = []

  //
  // load() method loads data form projects.json to projects,
  // if projects.json does not exists, create an empty list
  // and save into the file.
  //
  function load () {
    // init logger
    logger.setOptions({
      logMethod: 2,
      logFileName: logPath
    })

    return fsp.ensureFile(logPath)
      .then(() => fsp.ensureFile(keeperPath))
      .then(() => fsp.readJson(keeperPath))
      .then(obj => {
        return new Promise((resolve) => {
          if (obj !== undefined) {
            projects = obj
            logger.info(projects)
            resolve()
          }
        })
      })
      .catch((err) => {
        logger.info(projects)
        logger.error(err)

        fs.readFile(keeperPath, 'utf8', (e, data) => {
          logger.error(data)
          // fsp.writeJson(keeperPath, projects)
        })
      })
  }

  //
  // save() method serializes projects to projects.json.
  // FIXME Sometimes saveing is somehow unfinished and left a empty file.
  //
  function save () {
    fsp.readJson(keeperPath)
      .then(projInFile => {
        // merge projects in file
        return new Promise((resolve) => {
          _merge(projects, projInFile.map(v => v.path), false)
          resolve()
        })
      })
      // .then(() => verify())
      .then(() => {
        console.log(projects)
        logger.info(projects)
        fsp.writeJson(keeperPath, projects)
      })
      .catch(err => {
        console.log('[mainwindow] save projects failed', err)
        console.log(projects)
        logger.error('save projects failed', projects, err)
        return fsp.writeJson(keeperPath, projects)
      })
      // .done(() => console.log(projects))
  }

  function serialize () {
    // logger.info(projects)
    // fs.writeFileSync(keeperPath, JSON.stringify(projects))
    // logger.info(projects)
  }

  //
  // verify() method verifies project pathes. And remove invalid project.
  //
  function verify () {
    let ps = projects.map(p => {
      return new Promise(resolve => {
        fsp.access(p.path, fs.F_OK)
          .then(() => resolve(true))
          .catch(err => {
            console.log(`${p.path} no longer valid`, err)
            resolve(false)
          })
      })
    })

    return Promise.all(ps)
      .then(results => {
        projects = projects.filter((v, i) => results[i])
        logger.info(projects)
      })
  }

  //
  // format() method formats projects to ['HelloProject,/Users/dean/Downloads']
  //
  function format () {
    return projects.map(p => `${p.name},${p.path}`)
  }

  //
  // add() method adds project to project lists, and sorted using lru
  // changes = ['/path/to/p1', '/path/to/p2']
  // TODO Add eliminate strategy
  //
  function add (changes) {
    if (Array.isArray(changes) && changes.length > 0) {
      _merge(projects, changes, true)
      logger.info(projects)
      save()
    } else {
      console.log('changes invalid')
    }
  }

  //
  // _merge() method adds project to project lists, and sorted using lru
  // changes = ['/path/to/p1', '/path/to/p2']
  //
  function _merge (to, from, toTop = true) {
    from.forEach(f => {
      let index = to.findIndex(t => f === t.path)
      let t
      if (index === -1) {
        // create one if not exists
        t = {
          name: path.basename(f),
          path: f
        }
      } else {
        // remove if exists
        t = to.splice(index, 1)[0]
      }

      // save to top of projects
      if (toTop) {
        to.unshift(t)
      } else {
        to.push(t)
      }
    })
  }

  return {
    load: load,
    save: save,
    verify: verify,
    format: format,
    add: add,
    serialize: serialize
  }
})()
