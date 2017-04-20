'use strict'

const request = require('request')
const validUrl = require('valid-url')
const getMetadata = require('./lib/getMetadata')

module.exports = (uri, callback) => {

  if(!uri){
    return callback(new Error('Missing required param'), null)
  }

  if (!validUrl.isWebUri(uri)) {
    return callback(new Error('Invalid uri'), null)
  }

  request(uri, (error, response, body) => {
    if (error) {
      return callback(error, null)
    }

    getMetadata(body.toString(), function (err, data) {
      if(err){
        return callback(err, null)
      } else {
        return callback(null, data)
      }
    })
  })
}
