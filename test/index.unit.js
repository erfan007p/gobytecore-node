'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export gobytecore-lib', function() {
    var gobytecore = require('../');
    should.exist(gobytecore.lib);
    should.exist(gobytecore.lib.Transaction);
    should.exist(gobytecore.lib.Block);
  });
});
