'use strict'

const { Service } = require('egg')

class ApiService extends Service {
  index () {
    return {
      name: '小明'
       
    }
  }
}

module.exports = ApiService
