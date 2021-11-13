'use strict';

var createError = require('errno').create;

var GoBytecoreNodeError = createError('GoBytecoreNodeError');

var RPCError = createError('RPCError', GoBytecoreNodeError);

module.exports = {
  Error: GoBytecoreNodeError,
  RPCError: RPCError
};
