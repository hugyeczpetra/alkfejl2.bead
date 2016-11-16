'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
  plants () {
    return this.hasMany('App/Model/Plant')
  }
}

module.exports = Category
