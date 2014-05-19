var request = require('request')
  , validUrl = require('valid-url')
  , cheerio = require('cheerio')
  ;


function getMetadata(uri, callback){

  request(uri, function(error, response, body){
    if(error){
      return callback(error, null);
    }

    var $ = cheerio.load(body.toString())
      , ret = {}
      ;

    ret.title = $('title').text();

    $('meta').each(function(index, element){
      var e = $(element);
      if(e.attr('property')){
        ret[e.attr('property')] = e.attr('content')
      };
      if(e.attr('name')){
        ret[e.attr('name')] = e.attr('content')
      };
    });

    return callback(null, ret);

  });

}


module.exports = function(uri, callback){

  if(!uri){
    return callback(new Error('Missing required param'), null);
  }

  if(!validUrl.isWebUri(uri)){
    return callback(new Error('Invalid uri'), null);
  }

  getMetadata(uri, function(err, data){
    if(err){
      return callback(err, null);
    }

    return callback(null, data);

  });

};