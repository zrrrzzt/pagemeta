'use strict';

var fs = require('fs');
var assert = require('assert');
var getMetadata = require('../lib/getMetadata');
var inputData = fs.readFileSync('test/testpage.html').toString();

describe('getMetadata - output', function(){

  it('returns a data object', function(done){

    getMetadata(inputData, function(err, data){
      if(err){
        throw err;
      }

      assert.equal(data.title, 'This is a testpage');
      assert.equal(data.generator, 'Manually coded');
      assert.equal(data.keywords, 'Testing, coding');
      assert.equal(data.description, 'This page is only for testing.');

      done();
    });

  });

});