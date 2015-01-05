var request = require('request')
  , validUrl = require('valid-url')
  , getMetadata = require('./lib/getmetadata')
  ;

function getPagemeta(uri, callback){

  if(!uri){
    return callback(new Error('Missing required param'), null);
  }

  if(!validUrl.isWebUri(uri)){
    return callback(new Error('Invalid uri'), null);
  }

  request(uri, function(error, response, body){
    if(error){
      return callback(error, null);
    }

    getMetadata(body.toString(), function(err, data){
      if(err){
        return callback(err, null);
      } else {
        return callback(null, data);
      }
    });

  });

};

module.exports = getPagemeta;