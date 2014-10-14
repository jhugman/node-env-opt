'use strict';
module.exports = function findOptions (keyList, optionalPrefixEnv) {
  var options = {},
      prefix = '';
  if (optionalPrefixEnv) {
    prefix = process.env[optionalPrefixEnv] || '';
  }
  _.each(keyList, function (key) {
    var value = process.env[prefix + key];
    
    if (value === undefined) {
      value = process.env[prefix + key.toUpperCase()];
    }

    if (value !== undefined) {
      options[key] = value;
    }
  });
  return options;
}