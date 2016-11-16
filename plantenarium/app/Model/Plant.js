'use strict'

const Lucid = use('Lucid')

class Plant extends Lucid {
  category () {
    return this.belongsTo('App/Model/Category')
  }

  users () {
    return this.belongsTo('App/Model/User')
  }
}

module.exports = Plant