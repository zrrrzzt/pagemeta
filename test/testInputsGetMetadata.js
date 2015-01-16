'use strict';

var getMetadata = require('../lib/getMetadata');
var assert = require('assert');

describe('getMetadata - inputs', function(){

  it('requires data to parse', function(done){

    var inputData = false;

    getMetadata(inputData, function(err, data){
      assert.throws(function(){
          if(err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err){
          if((err instanceof Error) && /Missing required input: data/.test(err)){
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

});