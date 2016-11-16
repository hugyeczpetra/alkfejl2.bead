'use strict'

const Lucid = use('Lucid')

class Review extends Lucid {
    plant () {
        return this.belongsTo('App/Model/Plant')
    }

    users () {
        return this.belongsTo('App/Model/User')
    }
}

module.exports = Review
