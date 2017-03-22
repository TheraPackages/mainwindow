'use strict'
'use babel'

const path = require('path')

class DefaultTemplate {
  constructor () {
    this.type = 'weex'
    this.templatePath = path.join(atom.packages.resolvePackagePath('mainwindow'), 'templates')
  }
}

module.exports = new DefaultTemplate()
