'use babel'
'use strict'

class ProjectTemplateService {
  constructor () {
    this.services = new Map()
  }

  regist (service) {
    this.services.set(service.type, service)
  }

  get (type) {
    return this.services.get(type)
  }
}

module.exports = new ProjectTemplateService()
