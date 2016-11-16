'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
    plants() {
        return this.hasMany('App/Model/Plant')
    }
}

module.exports = User
