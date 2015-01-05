'use strict';

var cheerio = require('cheerio')
  ;

/**
 *
 * @param {string} data - Data to be parsed
 * @param {callback} callback - Callback for handling the response
 *
 * @returns {object}
 */

function getMetadata(data, callback){

  var $ = cheerio.load(data)
    , ret = {}
    , e
    ;

  if(!data){
    return callback(new Error('Missing required input: data'), null);
  }

  ret.title = $('title').text();

  $('meta').each(function(index, element){
    e = $(element);
    if(e.attr('property')){
      ret[e.attr('property')] = e.attr('content')
    };
    if(e.attr('name')){
      ret[e.attr('name')] = e.attr('content')
    };
  });

  return callback(null, ret);

}

module.exports = getMetadata;