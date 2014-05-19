var pagemeta = require('../index')
  , assert = require('assert')
  ;

describe('pagemeta - response', function(){

  it('Should return a data object', function(done){

    var uri = 'https://www.google.com';

    pagemeta(uri, function(err, data){
      if(err){
        throw err;
      }

      assert(data.title);

      done();
    });

  });

});