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
    , returnObject = {}
    , elem
    ;

  if(!data){
    return callback(new Error('Missing required input: data'), null);
  }

  returnObject.title = $('title').text();

  $('meta').each(function(index, element){
    elem = $(element);
    if(elem.attr('property')){
      returnObject[elem.attr('property')] = elem.attr('content')
    };
    if(elem.attr('name')){
      returnObject[elem.attr('name')] = elem.attr('content')
    };
  });

  return callback(null, returnObject);

}

module.exports = getMetadata;